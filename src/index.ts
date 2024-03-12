import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number;
  studyGroupId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type StudyGroup = {
  id: number;
  courseId: number;
  title: string;
  keywords: string[];
  eventType: string;
};

type SearchEventsOptions = {
  query: string | number;
  eventType: string;
};

const searchEvents = (options: SearchEventsOptions) => {
  let events: (Course | StudyGroup)[] =
    options.eventType === "courses" ? courses : studyGroups;

  return events.filter((event: Course | StudyGroup) => {
    if (typeof options.query === "number") {
      return options.query === event.id;
    }

    if (typeof options.query === "string") {
      return event.keywords.includes(options.query);
    }
  });
};

const searchResults = searchEvents({ query: 2, eventType: "art" });
console.log(searchResults);

let enrolledEvents: (Course | StudyGroup)[] = [];

const enroll = (event: Course | StudyGroup) => {
  enrolledEvents.push(event);
};

enroll({
  id: 3,
  courseId: 3,
  title: "19th Century Art Study Group",
  keywords: ["1800s", "art", "history"],
  eventType: "group",
});

console.log(enrolledEvents);
