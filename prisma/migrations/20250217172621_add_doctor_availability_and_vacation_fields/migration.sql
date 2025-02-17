-- CreateEnum
CREATE TYPE "AppointmentStatus" AS ENUM ('PENDING', 'CONFIRMED', 'COMPLETED', 'CANCELLED');

-- AlterTable
ALTER TABLE "Appointments" ADD COLUMN     "status" "AppointmentStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "Doctor" ADD COLUMN     "available" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "availableTimes" JSONB NOT NULL DEFAULT '{}',
ADD COLUMN     "vacationEndDate" TIMESTAMP(3),
ADD COLUMN     "vacationStartDate" TIMESTAMP(3);
