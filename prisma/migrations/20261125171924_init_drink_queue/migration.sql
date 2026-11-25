-- CreateTable
CREATE TABLE "DrinkQueue" (
    "id" SERIAL NOT NULL,
    "queueNumber" INTEGER NOT NULL,
    "customerName" TEXT NOT NULL,
    "drinkName" TEXT NOT NULL,
    "qty" INTEGER NOT NULL DEFAULT 1,
    "status" TEXT NOT NULL DEFAULT 'waiting',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DrinkQueue_pkey" PRIMARY KEY ("id")
);
