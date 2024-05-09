-- CreateTable
CREATE TABLE "UserDocuments" (
    "id" SERIAL NOT NULL,
    "documentUrl" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "UserDocuments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserDocuments" ADD CONSTRAINT "UserDocuments_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
