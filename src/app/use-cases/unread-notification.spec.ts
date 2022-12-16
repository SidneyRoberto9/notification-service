import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";

import { makeNotification } from "../../../test/factories/notification-factory";
import { NotificationNotFound } from "./errors/notification-not-found.erro";
import { UnReadNotification } from "./unread-notification";

describe('UnRead Notification', () => {
  it('should be able to unread a notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnReadNotification(notificationRepository);
    const notification = makeNotification({ readAt: new Date() });

    await notificationRepository.create(notification);

    await unreadNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationRepository.notifications[0].readAt).toBeNull();
  });

  it('should be not able to unread notification when id does not exist', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const unreadNotification = new UnReadNotification(notificationRepository);

    await expect(() => {
      return unreadNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
