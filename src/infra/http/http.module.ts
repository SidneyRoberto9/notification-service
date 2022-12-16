import { CancelNotification } from "@app/use-cases/cancel-notification";
import { CountRecipientNotification } from "@app/use-cases/count-recipient-notification";
import { GetRecipientNotification } from "@app/use-cases/get-recipient-notifications";
import { ReadNotification } from "@app/use-cases/read-notification";
import { SendNotification } from "@app/use-cases/send-notification";
import { UnReadNotification } from "@app/use-cases/unread-notification";
import { Module } from "@nestjs/common";

import { DatabaseModule } from "../database/database.module";
import { NotificationsController } from "./controllers/notifications.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    ReadNotification,
    UnReadNotification,
    CountRecipientNotification,
    GetRecipientNotification,
  ],
})
export class HttpModule {}
