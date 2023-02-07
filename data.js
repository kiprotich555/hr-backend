
const bcrypt = require('bcryptjs')

const data = {
    admins: [
        {
            adminId: 2022,
            adminName: 'Victor Kipkemoi',
            adminPassword: bcrypt.hashSync('victor_'),
            isAdmin: true,
        },
        {
            adminId: 2023,
            adminName: 'Tom',
            adminPassword: bcrypt.hashSync('tom'),
            isAdmin: true,
        },
    ],
    users: [
        {
            userId: 3220,
            firstName: 'Victor',
            lastName: ' Kipkemoi',
            email: 'victorkemoi@gmail.com',
            mobile: '0726236718',
            role: 'Boss',
            roleType: 'Full-stack web Developer',
            password: bcrypt.hashSync('victor')
        },
        {
            userId: 3221,
            firstName: 'Tom',
            lastName: 'Okoth',
            email: 'tom@gmail.com',
            mobile: '0725235418',
            role: 'Bos',
            roleType: 'Super Admin',
            password: bcrypt.hashSync('tom')
        },
        {
            userId: 3222,
            firstName: 'Aaron',
            lastName: 'Brown',
            email: 'brownaaron@gmail.com',
            mobile: '07384120312',
            role: 'Boss',
            roleType: 'HR Admin',
            password: bcrypt.hashSync('aaron')
        }

    ],

    departments: [
        {
            departmentName: 'Web Development',
            departmentHead: 'Victor Pkemo',
            totalEmployees: 50
        },
        {
            departmentName: 'Marketing',
            departmentHead: 'Eliud Paul',
            totalEmployees: 13
        },
        {
            departmentName: 'App Development',
            departmentHead: 'Jordan Ahyu',
            totalEmployees: 15
        },
        {
            departmentName: 'Support Team',
            departmentHead: 'Diana Ashuka',
            totalEmployees: 5
        }
    ],
    employee: [
        {
            employeeId: '2026',
            firstName: 'Adams',
            lastName: 'Karuiki',
            email: 'admas@gmail.com',
            phone: '0795678212',
            role: 'React Developer'
        },
        {
            employeeId: '2027',
            firstName: 'Abel',
            lastName: 'Kosing',
            email: 'kosing@gmail.com',
            phone: '0724785235',
            role: 'Node Developer'
        },
        {
            employeeId: '2028',
            firstName: 'Maxwell',
            lastName: 'Mckannon',
            email: 'maxwell@gmail.com',
            phone: '0777378902',
            role: 'FullStack Develeoper'
        },
        {
            employeeId: '2029',
            firstName: 'Florence',
            lastName: 'Boit',
            email: 'froboit@gmail.com',
            phone: '0788234892',
            role: 'Mobile Developer'
        }
    ],

    holidays: [
        {
            day: 'Sunday',
            date: '01.01.2023',
            holiday: 'New Year'
        },
        {
            day: 'Friday',
            date: '07.04.2023',
            holiday: 'Good Friday'
        },
        {
            day: 'Monday',
            date: '10.04.2023',
            holiday: 'Easter Monday'
        },
        {
            day: 'Saturday',
            date: '22.04.2023',
            holiday: 'Idd-Ul-Filtr'
        },
        {
            day: 'Monday',
            date: '01.05.2023',
            holiday: 'Labour Day'
        },
        {
            day: 'Thurday',
            date: '01.06.2023',
            holiday: 'Madara Day'
        },
        {
            day: 'Thurday',
            date: '29.06.2023',
            holiday: 'Idd-Ul-Azha'
        },
        {
            day: 'Tuesday',
            date: '10.10.2023',
            holiday: 'Utamaduni Day'
        },
        {
            day: 'Friday',
            date: '20.10.2023',
            holiday: 'Mashujaa Day'
        },
        {
            day: 'Tuesday',
            date: '12.12.2023',
            holiday: 'Jamhuri Day'
        },
        {
            day: 'Monday',
            date: '25.12.2023',
            holiday: 'X-mas Day'
        },
        {
            day: 'Tuesday',
            date: '26.12.2023',
            holiday: 'Boxing Day'
        },
    ],
    accounts: [
        {
            invoiceNo: 'recipe-304',
            clients: 'Google',
            type: 'M-Pesa',
            amount: 'KSH1600'
        },
        {
            invoiceNo: 'recipe-3031',
            clients: 'Amazon',
            type: 'PayPal',
            status: true,
            amount: 'KSH88000'
        },
        {
            invoiceNo: 'recipe-2021',
            clients: 'Microsoft',
            type: 'Ethereum',
            amount: 'KSH45000'
        },
        {
            invoiceNo: 'recipe-2989',
            clients: 'Microsoft',
            type: 'Bitcoin',
            status: true,
            amount: 'KSH1000000'
        },
    ],
    events: [
        {

            startAt: '2021-01-15T18:00:00.000Z',
            endAt: '2021-11-21T19:00:00.000Z',
            summary: 'test',
            color: 'blue',

        },
        {

            startAt: '2023-01-14T18:00:00.000Z',
            endAt: '2021-11-15T19:00:00.000Z',
            summary: 'test',
            color: 'blue'
        },
        {

            startAt: '2023-01-10T18:50:00.000Z',
            endAt: '2023-01-14T18:00:00.000Z',
            timezoneStartAt: 'Nairobi',
            summary: 'We are starting work for a client from Koru',
            color: 'blue'
        },
        {

            startAt: '2023-01-19T18:50:00.000Z',
            endAt: '2023-01-21T18:00:00.000Z',
            summary: 'Developing Mobile App for Kenchen',
            color: 'green'
        }
    ],
    projects: [
        {
            clientName: 'Andrew Kibe',
            project: 'Food Delivery App',
            projectCost: 35000,

        },
        {
            clientName: 'Alex Tolgos',
            project: 'School Website',
            projectCost: 25000,

        },
        {
            clientName: 'Joan Cate',
            project: 'Fashion & Design graphics',
            projectCost: 10000,

        },
        {
            clientName: 'Yolandah Njeri',
            project: 'Mobile App',
            projectCost: 100000,
            payment: 'Done',
            status: 'Delivered'
        }
    ]
}

module.exports = data
