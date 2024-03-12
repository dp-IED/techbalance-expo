import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4";

interface Notification {
  id: string;
  user_id: string;
  body: string;
}

const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
);

Deno.serve(async (req) => {
  const payload = await req.json();
  const { data, error } = await supabase
    .from("Users")
    .select("expo_push_token");

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
    .map((user) =>
      fetch("https://exp.host/--/api/v2/push/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${Deno.env.get("NOTIFS_EXPO_PERSONAL_TOKEN")}`,
        },
        body: JSON.stringify({
          to: user.expo_push_token,
          sound: "default",
          body: payload.body,
        }),
      })
    );

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
