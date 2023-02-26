export enum ActivityTypeEnum {
  sleep = 'ActivityTypeEnum.sleep',
  awake = 'ActivityTypeEnum.awake'
}

export enum FeedTypeEnum {
  none = 'FeedTypeEnum.none',
  right = 'FeedTypeEnum.right',
  left = 'FeedTypeEnum.left',
  both = 'FeedTypeEnum.both',
  bottle = 'FeedTypeEnum.bottle'
}

export interface ActivityEntry {
  activityType: ActivityTypeEnum
  date: string // iso
  duration: number //seconds
}

export interface FeedEntry {
  feedType: FeedTypeEnum
  date: string // iso
  duration: number //seconds
}

export interface UserStatsStorageEntry {
  id: string // slug foreign key?
  activities: Array<ActivityEntry>
  feeds: Array<FeedEntry>
}

export interface UserEntry {
  id: string
  name: string
  babyname: string
  secret: string // any type of auth/secret
}

export interface StorageEntry {
  users: Array<UserEntry>
  userStats: Array<UserStatsStorageEntry>
}
