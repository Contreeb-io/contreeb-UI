import { CalendarIcon, Earth, User } from "lucide-react";
import { useState } from "react";
import { Controller } from "react-hook-form";
import { useMultiStepForm } from "~/context/multi-step-context";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import { Field, FieldError, FieldGroup, FieldLabel } from "../ui/field";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Textarea } from "../ui/textarea";
import Header from "./header";
import MomoForm from "./momo-form";

export default function CampaignDetails() {
  const { form, nextStep } = useMultiStepForm();

  const [openStart, setOpenStart] = useState(false);
  const [openEnd, setOpenEnd] = useState(false);
  const [startDate, setStartDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [startMonth, setStartMonth] = useState<Date>(startDate);
  const [endMonth, setEndMonth] = useState<Date>(endDate);
  const [startValue, setStartValue] = useState(formatDate(startDate));
  const [endValue, setEndValue] = useState(formatDate(endDate));
  const [startTime, setStartTime] = useState("00:00:00");
  const [endTime, setEndTime] = useState("00:00:00");

  function formatDate(date: Date | undefined) {
    if (!date) {
      return "";
    }
    return date.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }
  function isValidDate(date: Date | undefined) {
    if (!date) {
      return false;
    }
    return !isNaN(date.getTime());
  }

  return (
    <section className="mx-auto max-w-[648px] space-y-8">
      <Header
        header="Tell us what your campaign is about"
        desc=" Fill in the basic details of your campaign"
      />

      <form id="campaign-details" className="z-30 space-y-8 font-sans">
        <FieldGroup className="space-y-2.5">
          <Controller
            name="type"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field
                orientation="responsive"
                data-invalid={fieldState.invalid}
                className="w-[140px]"
              >
                <Select
                  name={field.name}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger
                    id="type"
                    aria-invalid={fieldState.invalid}
                    className="flex w-[140px] border border-[#F0F2F5] bg-white shadow-none"
                  >
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent
                    position="item-aligned"
                    className="text-sm font-medium text-[#150524]"
                  >
                    <SelectItem value="personal">
                      {" "}
                      <User color="#150524" size={18} /> Personal
                    </SelectItem>
                    <SelectItem value="public">
                      {" "}
                      <Earth color="#150524" size={18} /> Public
                    </SelectItem>
                  </SelectContent>
                </Select>
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel
                  htmlFor="name"
                  className="text-sm font-medium text-[#150524]"
                >
                  What would you like to call your campaign?
                </FieldLabel>
                <Input
                  {...field}
                  id="name"
                  aria-invalid={fieldState.invalid}
                  placeholder="Enter campaign name"
                  autoComplete="off"
                  className="shadow-none"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="description"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel
                  htmlFor="description"
                  className="text-sm font-medium text-[#150524]"
                >
                  Campaign description
                </FieldLabel>
                <Textarea
                  {...field}
                  id="description"
                  aria-invalid={fieldState.invalid}
                  placeholder="Describe the goal of your campaign"
                  autoComplete="off"
                  className="shadow-none"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <Controller
            name="target"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid} className="gap-1">
                <FieldLabel
                  htmlFor="name"
                  className="text-sm font-medium text-[#150524]"
                >
                  Campaign target (GHS)
                </FieldLabel>

                <Input
                  {...field}
                  id="name"
                  aria-invalid={fieldState.invalid}
                  placeholder="1000"
                  autoComplete="off"
                  className="shadow-none"
                  type="number"
                  min={1}
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />

          <div className="flex w-full flex-col items-center justify-between gap-6 rounded-[8px] bg-white p-4 backdrop-blur-sm md:flex-row md:gap-16">
            <div className="flex w-full flex-row items-center justify-between gap-1.5 text-sm font-medium text-[#574C62] md:flex-col md:items-start md:justify-start">
              <p>Start date & time</p>
              <img
                src={"/line-straight.png"}
                alt="dotted-lines"
                className="hidden h-8 w-2 md:block"
              />
              {/* <img
                src={dotted}
                alt="dotted-lines"
                className="block h-[101px] w-1 rotate-90 md:hidden"
              /> */}
              <p>End date & time</p>
            </div>
            <div className="flex gap-2">
              <div className="space-y-4 md:w-[200px]">
                {/* START DATE */}
                <div className="relative flex gap-2">
                  <Input
                    id="start-date"
                    value={startValue}
                    placeholder="June 01, 2025"
                    className="bg-background pr-10 shadow-none"
                    onChange={(e) => {
                      const date = new Date(e.target.value);
                      setStartValue(e.target.value);
                      if (isValidDate(date)) {
                        setStartDate(date);
                        setStartMonth(date);
                        form.setValue("start_date", date);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setOpenStart(true);
                      }
                    }}
                  />
                  <Popover open={openStart} onOpenChange={setOpenStart}>
                    <PopoverTrigger asChild>
                      <Button
                        id="start-date-picker"
                        variant="ghost"
                        className="absolute top-1/2 right-2 size-6 -translate-y-1/2"
                      >
                        <CalendarIcon className="size-3.5" />
                        <span className="sr-only">Select start date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="end"
                      alignOffset={-8}
                      sideOffset={10}
                    >
                      <Calendar
                        mode="single"
                        selected={startDate}
                        captionLayout="dropdown"
                        month={startMonth}
                        onMonthChange={setStartMonth}
                        onSelect={(date) => {
                          if (!date) {
                            return;
                          }
                          setStartDate(date);
                          setStartValue(formatDate(date));
                          form.setValue("start_date", date);
                          setOpenStart(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* END DATE */}
                <div className="relative flex gap-2">
                  <Input
                    id="end-date"
                    value={endValue}
                    placeholder="June 01, 2025"
                    className="bg-background pr-10 shadow-none"
                    onChange={(e) => {
                      const date = new Date(e.target.value);
                      setEndValue(e.target.value);
                      if (isValidDate(date)) {
                        setEndDate(date);
                        setEndMonth(date);
                        form.setValue("end_date", date);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "ArrowDown") {
                        e.preventDefault();
                        setOpenEnd(true);
                      }
                    }}
                  />
                  <Popover open={openEnd} onOpenChange={setOpenEnd}>
                    <PopoverTrigger asChild>
                      <Button
                        id="end-date-picker"
                        variant="ghost"
                        className="absolute top-1/2 right-2 size-7 -translate-y-1/2"
                      >
                        <CalendarIcon className="size-3.5" />
                        <span className="sr-only">Select end date</span>
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto overflow-hidden p-0"
                      align="end"
                      alignOffset={-8}
                      sideOffset={10}
                    >
                      <Calendar
                        mode="single"
                        selected={endDate}
                        captionLayout="dropdown"
                        month={endMonth}
                        onMonthChange={setEndMonth}
                        onSelect={(date) => {
                          if (!date) {
                            return;
                          }
                          setEndDate(date);
                          setEndValue(formatDate(date));
                          form.setValue("end_date", date);
                          setOpenEnd(false);
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>
              <div className="w-[130px] space-y-4">
                <Input
                  type="time"
                  id="time-picker"
                  step="1"
                  value={startTime}
                  onChange={(e) => {
                    setStartTime(e.target.value);
                    form.setValue("start_time", e.target.value);
                  }}
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />{" "}
                <Input
                  type="time"
                  id="time-picker"
                  step="1"
                  value={endTime}
                  onChange={(e) => {
                    setEndTime(e.target.value);
                    form.setValue("end_time", e.target.value);
                  }}
                  className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
                />
              </div>
            </div>
          </div>

          <MomoForm />
        </FieldGroup>

        <button
          type="button"
          onClick={nextStep}
          className="font-inter mt-6 w-full cursor-pointer rounded-full bg-[#6360F0] px-4 py-3 text-sm font-semibold text-white"
        >
          Continue
        </button>
      </form>
    </section>
  );
}
