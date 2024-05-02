const prismaClient = require('@prisma/client');
const xlsx = require('xlsx');
// const db = require('./src/server/db');

const db = new prismaClient.PrismaClient();

function sanitizeDates(data) {
    if (typeof data === 'string') {
        return data
    }
    return data?.toISOString() || null;
}
async function main() {
    const workbook = xlsx.readFile('./sheets/Postgraduate_scholarships_2023_2024.xlsx', {
        cellDates: true,
        raw: true
    });
    let workbook_sheet = workbook.SheetNames;
    let worksheet = xlsx.utils.sheet_to_json(
        workbook.Sheets[workbook_sheet[0]],
        { header: 1 },
    );

    for (let i = 2; i < worksheet.length; i++) {
        const [scholarshipName, country, openingDates, deadline, courseOfStudyInfo, link] = worksheet[i];
        await db.scholarship.create({
            data: {
                scholarshipName,
                country,
                openingDates: sanitizeDates(openingDates) || null,
                deadline: sanitizeDates(deadline) || null,
                courseOfStudyInformation: courseOfStudyInfo || null,
                link: link || null,
            }
        });
    }

    console.log('Data has been successfully added to the database!');
}

main()
    .catch(console.error)
    .finally(() => db.$disconnect());