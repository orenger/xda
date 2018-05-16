export interface NotificationResponse {
    notificationGroups:Array<NotificationGroup>
}

export interface NotificationGroup {
    groupTitle:string
    notifications:Array<Notification>
}

export interface Notification {
    title:string
    time:string
    messageBody:string
    isImportant:boolean
}