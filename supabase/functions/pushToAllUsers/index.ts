import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

interface Notification {
  title: string;
  body: string;
  data: {
    redirectTo?: string;
  };
}

function returnBodyGivenNotificationID({
  notificationID,
  name,
  goal,
}: {
  notificationID: string;
  name: string;
  goal?: {
    id: string; // assuming the goal has an id
    title: string;
    description: string; // assuming the goal has a description
  };
}): Notification | null {
  const today = new Date();

  console.log(today.getDay());

  switch (notificationID) {
    case "N01":
      return {
        title: "Goal Setting Time !",
        body: `Hey ${name}! Ready to set today's goals?`,
        data: {
          redirectTo: "addGoals",
        },
      };
    case "N02":
      switch (today.getDay()) {
        case 1:
          return {
            title: "Forgot to set your goals ?",
            body: "No sweat! It's not too late to jump in.",
            data: {
              redirectTo: "addGoals", // open modal on the app
            },
          };
        case 2:
          return {
            title: "Forgot to set your goals ?",
            body: "No worries! There's still time to set yourself up for the day.",
            data: {
              redirectTo: "addGoals",
            },
          };
        case 3:
          return {
            title: "Forgot to set your goals ?",
            body: "That's okay! Take a moment to choose today's priorities goals",
            data: {
              redirectTo: "addGoals",
            },
          };
        case 4:
          return {
            title: "Forgot to set your goals ?",
            body: "No biggie! Take a moment to regroup and set today's goals",
            data: {
              redirectTo: "addGoals",
            },
          };
        case 5:
          return {
            title: "Forgot to set your goals ?",
            body: "No problem! Take a minute to reflect, set new goals, and finish the week strong!",
            data: {
              redirectTo: "addGoals",
            },
          };
        default:
          return null;
      }
    case "N03":
      return {
        title: "Today's goals",
        body: `Hey ${name}! How are your goals coming along?`,
        data: {
          redirectTo: "home",
        },
      };
    case "N04":
      return {
        title: "Yesterday's goals",
        body: `Hey ${name}! How did you do on yesterday's goals?`,
        data: {
          redirectTo: "home", // optionally the outdated goals page
        },
      };
    case "N05": // for individual goals
      if (!goal) {
        return null;
      }

      return {
        title: `Time for your goal: ${goal?.title}`,
        body: goal?.description,
        data: {
          redirectTo: `goalDetails/${goal.id}`,
        },
      };
    case "N06":
      return null; // not in pilot

    case "N07":
      switch (today.getDay()) {
        case 1:
          return {
            title: "Mood check-in",
            body: `Hey ${name}, how's your Monday going?`,
            data: {
              redirectTo: "moodCheckIn",
            },
          };
        case 2:
          return {
            title: "Mood check-in",
            body: `Hey ${name}! Got a moment to reflect on your mood today?`,
            data: {
              redirectTo: "moodCheckIn",
            },
          };
        case 3:
          return {
            title: "Mood check-in",
            body: `Midweek check-in! How's today going?`,
            data: {
              redirectTo: "moodCheckIn",
            },
          };
        case 4:
          return {
            title: "Mood check-in",
            body: `How are you feeling today? `,
            data: {
              redirectTo: "moodCheckIn",
            },
          };
        case 5:
          return {
            title: "Mood check-in",
            body: `Feeling ready for the weekend?`,
            data: {
              redirectTo: "moodCheckIn",
            },
          };
        default:
          return null;
      }
    case "N08":
      return null; // not in pilot

    case "N09":
      return {
        title: "Weekly progress",
        body: `Week complete! Check out your weekly summary`,
        data: {
          redirectTo: "progress", // subject to progress page being available
        },
      };
    default:
      return null;
  }
}

interface Payload {
  notificationID: string;
}

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

Deno.serve(async (req) => {
  const payload: Payload = await req.json();
  const { data, error } = await supabase
    .from("Users")
    .select("expo_push_token, firstName");

  if (!data) {
    console.log(error);
    return new Response(JSON.stringify({ message: error }), {
      status: 403,
    });
  } else {
    console.log(data, error);
  }

  const promises = data
    .filter((user) => user.expo_push_token !== null)
    .map((user) => {
      const notif = returnBodyGivenNotificationID({
        notificationID: payload.notificationID,
        name: user.firstName,
      });

      if (!notif) {
        return Promise.resolve();
      }

      fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Deno.env.get("NOTIFS_EXPO_PERSONAL_TOKEN")}`,
        },
        body: JSON.stringify({
          to: user.expo_push_token,
          sound: "default",
          title: notif.title,
          body: notif.body,
        }),
      });
    });

  try {
    await Promise.allSettled(promises);
    return new Response(
      JSON.stringify({ message: "Notifications sent successfully" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Error sending notifications" }),
      {
        status: 500,
      }
    );
  }
});
