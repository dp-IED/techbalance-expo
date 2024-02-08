export type MoodChartProps = {
  data: {
    value: number;
    date: Date;
    customDataPoint: Function;
    labelTextStyle: {
      color: string;
      fontWeight: string;
    };
  }[];
};
