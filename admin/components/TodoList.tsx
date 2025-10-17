"use client"

import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "./ui/card";
import { Checkbox } from "./ui/checkbox";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "./ui/button";
import { CalculatorIcon } from "lucide-react";
import { format } from "date-fns";

const todos = [
  { id: "1", text: "Finish homework" },
  { id: "2", text: "Buy groceries" },
  { id: "3", text: "Clean the house", completed: true },
  { id: "4", text: "Walk the dog" },
  { id: "5", text: "Read a book", completed: true },
  { id: "6", text: "Finish project report" },
  { id: "7", text: "Call mom" },
  { id: "8", text: "Schedule doctor's appointment" },
  { id: "9", text: "Pay utility bills", completed: true },
  { id: "10", text: "Buy a new phone charger" },
  { id: "11", text: "Visit the gym", completed: true },
  { id: "12", text: "Write blog post" },
  { id: "13", text: "Clean the kitchen" },
  { id: "14", text: "Plan weekend trip" },
  { id: "15", text: "Watch the new movie", completed: true }
];


const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState(false);
  
  return (
    <div className="">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>

      {/* Calendar */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <CalculatorIcon />
            {date ? format(date, 'PPP') : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>


      {/* LIST */}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/* CARD LIST */}
          {todos.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex items-center gap-4">
                <Checkbox id={item.id} checked={item.completed}/>
                <label htmlFor={item.id} className="text-sm text-muted-foreground">{item.text}</label>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default TodoList; 