import { serve } from "https://deno.land/std@0.155.0/http/server.ts";

// import { NewsPath } from './env'

const HTML_ROUTE = new URLPattern({ pathname: "/html" });
const ROOT_ROUTE = new URLPattern({ pathname: "/" });
const STORE_ROUTE = new URLPattern({ pathname: "/store" });

// const NewsPath = 'https://hacker-news.firebaseio.com/v0'

enum ActivityTypeEnum {
  sleep = 'ActivityTypeEnum.sleep',
  awake = 'ActivityTypeEnum.awake'
}

enum FeedTypeEnum {
  none = 'FeedTypeEnum.none',
  right = 'FeedTypeEnum.right',
  left = 'FeedTypeEnum.left',
  both = 'FeedTypeEnum.both',
  bottle = 'FeedTypeEnum.bottle'
}

interface ActivityEntry {
  activityType:ActivityTypeEnum;
  date: String; // iso
  duration: Number; //seconds
}
  
interface FeedEntry {
  feedType:FeedTypeEnum;
  date: String; // iso
  duration: Number; //seconds
}

interface UserStatsStorageEntry {
  id: string; // slug foreign key?
  activities: Array<ActivityEntry>;
  feeds: Array<FeedEntry>;
}

interface UserEntry {
  id: string;
  name: string;
  babyname: string;
  secret: string; // any type of auth/secret
}

interface StorageEntry {
  users: Array<UserEntry>;
  userStats: Array<UserStatsStorageEntry>;
}

const insertInHtml = (str: string) => `<html><head></head><body>${str}</body></html>`

const mapActivityEntryToHtml = (entry: ActivityEntry) => `<div>${entry.activityType} ${entry.date} ${entry.duration}</div>`
const mapFeedEntryToHtml = (entry: FeedEntry) => `<div>${entry.feedType} ${entry.date} ${entry.duration}</div>`
const mapUserStatsToHtml = (entry: UserStatsStorageEntry) => `<div>${entry.id} ${entry.activities.map(mapActivityEntryToHtml).join('')} ${entry.feeds.map(mapFeedEntryToHtml).join('')}</div>`

const handler = (req: Request): Response => {
  const rootMatch = ROOT_ROUTE.exec(req.url);
  const storeMatch = STORE_ROUTE.exec(req.url);
  const htmlMatch = HTML_ROUTE.exec(req.url);
  if (rootMatch) {
    // extract user id from url
    // const id = match.pathname.groups.id;
    return new Response('not implemented');
  }
  if (storeMatch) {
    // store entry based on user id
    return new Response("not implemented");
  }
  if (htmlMatch) {
    // extract user id from url and return html representation of user stats
    return new Response('not implemented');
    // return new Response(insertInHtml(mapStoryToHtml(buf).join('')), {headers: {
    //     "content-type": "text/html; charset=utf-8",
    //   }});
  }
  return new Response("Not found (try /)", {
    status: 404,
  });
}
serve(handler)
// serve((req: Request) => new Response(buf.toString()));