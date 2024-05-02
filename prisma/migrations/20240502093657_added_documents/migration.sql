-- CreateTable
CREATE TABLE "Documents" (
    "id" SERIAL NOT NULL,
    "documentUrl" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
