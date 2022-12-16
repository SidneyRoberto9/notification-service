import { Content } from "@app/entities/content";
import { Notification, NotificationProps } from "@app/entities/notification";

type override = Partial<NotificationProps>;

export function makeNotification(overrides: override = {}): Notification {
  return new Notification({
    category: 'social',
    content: new Content('Nova Solicitação de Amizade'),
    recipientId: 'exemple-1',
    ...overrides,
  });
}
