import { makeNotification } from "@test/factories/notification-factory";
import { InMemoryNotificationRepository } from "@test/repositories/in-memory-notifications-repository";

import { GetRecipientNotification } from "./get-recipient-notifications";

describe('Getrecipients Notifications', () => {
  it('should be able to get recipient notification', async () => {
    const notificationRepository = new InMemoryNotificationRepository();
    const getRecipientNotification = new GetRecipientNotification(
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

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'exemple-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'exemple-1' }),
        expect.objectContaining({ recipientId: 'exemple-1' }),
      ]),
    );
  });
});
