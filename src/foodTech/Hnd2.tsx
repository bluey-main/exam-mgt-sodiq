/* eslint-disable @typescript-eslint/no-unused-vars */
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

interface DayData {
  id: number;
  name: string;
  course: string;
  date: string;
  time: string;
  period: string;
  active:boolean;
}

const FTHnd2: React.FC = () => {
  const numberOfDays = [
    "day1",
    "day2",
    "day3",
    "day4",
    "day5",
    "day6",
    "day7",
    "day8",
    "day9",
    "day10",
  ];

  const [selectedDates] = useState<Date[]>(
    numberOfDays.map(() => new Date())
  );

  const [selectedTimes, setSelectedTimes] = useState<string[]>(
    numberOfDays.map(() => "")
  );

  const [courseList] = useState<string[]>([
    "Select Course",
    "FST411",
    "FST412",
    "FST413",
    "FST414",
    "FST415",
    "FST416",
    "FST421",
    "FST422",
    "FST423",
    "FST424",
    "FST425",
    "FST426",

  ]);

  const formatSelectedDate = (selectedDate: Date) => {
    const day = selectedDate.getDate().toString().padStart(2, "0");
    const month = (selectedDate.getMonth() + 1).toString().padStart(2, "0"); // Month is zero-based
    const year = selectedDate.getFullYear().toString().slice(-2);

    return `${day}/${month}/${year}`;
  };

  const [finalDataHnd2, setfinalDataHnd2] = useState<{ data: DayData[] }>({
    data: numberOfDays.map((day, index) => ({
      id: index + 1,
      name: day,
      course: "",
      date: '',
      time: "",
      period: "",
      active:false,
    })),
  });

  const finalData = {
    department:'FOOD TECHNOLOGY',
    class:'HND2',
    data: finalDataHnd2
  }

  const handleOptionChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = event.target.value;
    const timeOptions:Record<string, string> = {
      morning: "9am-12pm",
      afternoon: "1pm-4pm",
      evening: "3pm-6pm",
    };

    setSelectedTimes((prevTimes) => [
      ...prevTimes.slice(0, index),
      timeOptions[value],
      ...prevTimes.slice(index + 1),
    ]);

    setfinalDataHnd2((prevData) => ({
      data: prevData.data.map((dayData, dataIndex) => ({
        ...dayData,
        period: dataIndex === index ? value : dayData.period,
        time: dataIndex === index ? timeOptions[value] : dayData.time,
      })),
    }));
  };

  return (
    <ScrollArea className="w-full h-full bg-orange">
      <Tabs defaultValue="day1" className="w-full">
        <TabsList className="flex gap-x-3">
          {numberOfDays.map((day, index) => (
            <TabsTrigger value={day} key={index} className={`flex-1 ${(finalDataHnd2.data[index].active == true) ? "bg-green-500": "bg-red-500" }`}>
              Day {index + 1}
            </TabsTrigger>
          ))}
        </TabsList>

        {numberOfDays.map((day, index) => (
          <TabsContent value={day} key={index}>
            <div className="w-full h-full flex justify-center items-center">
              <Card className="w-[30rem] border-black">
                <CardHeader>
                <div className="flex justify-between">
                    <CardTitle className="text-2xl">Day {index + 1} </CardTitle>
                    <CardTitle className="text-2xl">
                      {finalDataHnd2.data[index].course}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-y-6">
                    <select
                      name="course"
                      className="w-full h-11 border border-black px-3"
                      onChange={(e) => {
                        setfinalDataHnd2((prevData) => ({
                          data: prevData.data.map((dayData, dataIndex) => ({
                            ...dayData,
                            course:
                              dataIndex === index
                                ? e.target.value
                                : dayData.course,
                          })),
                        }));
                      }}
                    >
                      {courseList.map((course, courseIndex) => (
                        <option key={courseIndex} value={course}>
                          {course}
                        </option>
                      ))}
                    </select>
                    <div>
                      <Label htmlFor="date" className="text-lg">
                        Date
                      </Label>
                      <Input
                        id="date"
                        type="date"
                        placeholder="date"
                        value={formatSelectedDate(selectedDates[index])} // Display formatted date
                        onChange={(e) => setfinalDataHnd2((prevData) => ({
                          data: prevData.data.map((dayData, dataIndex) => ({
                            ...dayData,
                            date:
                              dataIndex === index
                                ? e.target.value
                                : dayData.date,
                          })),
                        }))


                          // setSelectedDates((prevDates) => {
                          //   const newDates = [...prevDates];
                          //   newDates[index] = new Date(e.target.value);
                          //   return newDates;
                          // })
                        }
                      />
                      <p>
                        Selected Date:{" "}
                        {finalDataHnd2.data[index].date}
                      </p>
                    </div>

                    <div>
                      <div className="flex gap-x-8">
                        {["morning", "afternoon", "evening"].map((value) => (
                          <label key={value} className="flex items-center">
                            <input
                              type="radio"
                              value={value}
                              checked={selectedTimes[index] === value}
                              onChange={(e) => handleOptionChange(e, index)}
                              className="h-5 w-5 mr-2"
                            />
                            {value.charAt(0).toUpperCase() + value.slice(1)}
                          </label>
                        ))}
                      </div>
                      <p>Selected option: {finalDataHnd2.data[index].time}</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button
                    variant={"outline"}
                    className="bg-black text-white w-28 hover:bg-white hover:text-black "
                    onClick={() => {
                      setfinalDataHnd2((prevData) => ({
                        data: prevData.data.map((dayData, dataIndex) => ({
                          ...dayData,
                          active:
                            dataIndex === index
                              ? true
                              : dayData.active,
                        })),
                      }))
                      console.log(finalData);
                    }}
                  >
                    Set Date
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </ScrollArea>
  );
};

export default FTHnd2;
