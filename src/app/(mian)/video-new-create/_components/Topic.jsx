"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const suggestions = [
  "History Story",
  "Science Story",
  "Movie Story",
  "Space Mysteries",
  "Horror Stories",
  "Mythology Stories",
  "Fantasy Stories",
  "Adventure Stories",
  "Tech Breakthroughs",
  "True Crime Stories",
  "Fantasy Stories",
  "Motivational Stories",
];

const Topic = () => {
  const [selectedTopic, setSelectedTopic] = useState();
  return (
    <div className="w-full flex flex-col px-4 gap-2">
      <h2 className="mb-1 text-lg sm:text-xl">Topic Title</h2>
      <Input
        placeholder="Enter Topic Title"
        className="w-full p-2 text-sm sm:text-base"
      />

      <div className="mb-2 w-full">
        <h2 className="text-base md:SStext-lg ">Video Topic</h2>
        <p className="text-sm text-gray-600">Select Topic for video</p>

        <div className="w-full">
          <Tabs defaultValue="suggestions" className="w-full mt-2">
            <TabsList className="w-full flex flex-wrap">
              <TabsTrigger
                value="suggestions"
                className="flex-1 text-sm sm:text-base"
              >
                Suggestions
              </TabsTrigger>
              <TabsTrigger
                value="your_topic"
                className="flex-1 text-sm sm:text-base"
              >
                Your Topic
              </TabsTrigger>
            </TabsList>

            <TabsContent value="suggestions" className="w-full mt-2">
              <div className="flex flex-wrap gap-2 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {suggestions.map((item, index) => (
                  <Button
                    key={index}
                    onClick={() => setSelectedTopic(item)}
                    variant="outline"
                    className={`"w-full sm:w-auto text-xs sm:text-sm p-2 ${
                      item === selectedTopic && "bg-secondary"
                    } "`}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="your_topic" className="w-full mt-2">
              <div className="flex flex-col gap-2">
                <h2 className="">Enter Your own Topic</h2>
                <Textarea placeholder="Enter Your Own Topic..." />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Topic;
