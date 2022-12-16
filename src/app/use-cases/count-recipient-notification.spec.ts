import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";

import { CountRecipientNotification } from "./count-recipient-notification";

describe('Count recipients Notifications', () => {
  it('should be able to count to recipient notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const countRecipientNotifications = new CountRecipientNotification(
      notificationRepository,
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'exemple-2' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'exemple-1' }),
    );

    await notificationRepository.create(
      makeNotification({ recipientId: 'exemple-1' }),
    );

    const { count } = await countRecipientNotifications.execute({
      recipientId: 'exemple-1',
    });

    expect(count).toEqual(2);
  });
});
