const dummyData = [
    {
        id: 1,
        name: 'John Doe',
        age: 28,
        gender: 'male',
        caste: 'khatri',
        manglik: 'non_manglik',
        maritalStatus: 'never_married',
        religion: 'hindu',
        image: '',
        images: [
            'https://randomuser.me/api/portraits/men/1.jpg',
            'https://randomuser.me/api/portraits/men/7.jpg',
            'https://randomuser.me/api/portraits/men/5.jpg',
            'https://randomuser.me/api/portraits/men/4.jpg'
        ],
        aboutMe: 'I am a software engineer with a passion for technology and innovation.',
        basicDetails: {
            caste: 'Khatri',
            maritalStatus: 'Never married',
            referenceId: 'PMF6353',
            gotra: '',
            dateOfBirth: '1996-3-30',
            gender: 'Male',
            height: '5Ft. 9In. (175 cm)',
            skinTone: 'Fair',
            bodyType: 'Athletic',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'No'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Non Manglik',
            cityOfBirth: 'Delhi',
            timeOfBirth: '2:30 am'
        },
        educationAndWorking: {
            qualification: 'B.Tech in Computer Science',
            profession: 'Software Engineer',
            professionDetails: 'Working at Google',
            workAddress: 'Bangalore',
            designation: 'Senior Software Engineer',
            annualIncome: 'Ask directly',
            hobbies: 'Coding, Reading, Traveling'
        },
        contactDetails: {
            permanentAddress: '123, ABC Street, Delhi',
            country: 'India',
            state: 'Delhi',
            city: 'Delhi',
            pincode: '110001',
            contactNo: '9876543210'
        },
        familyDetails: {
            fathersName: 'Mr. Rajesh Doe',
            fathersOccupation: 'Businessman',
            mothersName: 'Mrs. Sunita Doe',
            mothersOccupation: 'Homemaker',
            familyValue: 'Moderate',
            familySize: 'Nuclear',
            numberOfBrothers: 1,
            numberOfSisters: 0
        }
    },
    {
        id: 2,
        name: 'Jane Smith',
        age: 25,
        gender: 'female',
        caste: 'arora',
        manglik: 'manglik',
        maritalStatus: 'divorced',
        religion: 'sikh',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a creative designer with a love for art and aesthetics.',
        basicDetails: {
            caste: 'Arora',
            maritalStatus: 'Divorced',
            referenceId: 'PMF6354',
            gotra: '',
            dateOfBirth: '1998-5-15',
            gender: 'Female',
            height: '5Ft. 5In. (165 cm)',
            skinTone: 'Fair',
            bodyType: 'Slim',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'No'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Manglik',
            cityOfBirth: 'Amritsar',
            timeOfBirth: '4:00 pm'
        },
        educationAndWorking: {
            qualification: 'MBA in Marketing',
            profession: 'Graphic Designer',
            professionDetails: 'Freelancer',
            workAddress: 'Chandigarh',
            designation: 'Graphic Designer',
            annualIncome: 'Ask directly',
            hobbies: 'Painting, Traveling, Music'
        },
        contactDetails: {
            permanentAddress: '456, XYZ Street, Amritsar',
            country: 'India',
            state: 'Punjab',
            city: 'Amritsar',
            pincode: '143001',
            contactNo: '9876543211'
        },
        familyDetails: {
            fathersName: 'Mr. Harjeet Singh',
            fathersOccupation: 'Retired',
            mothersName: 'Mrs. Gurpreet Kaur',
            mothersOccupation: 'Homemaker',
            familyValue: 'Traditional',
            familySize: 'Joint',
            numberOfBrothers: 2,
            numberOfSisters: 1
        }
    },
    {
        id: 3,
        name: 'Sam Wilson',
        age: 30,
        gender: 'male',
        caste: 'brahmin',
        manglik: 'partial_manglik',
        maritalStatus: 'widow_widower',
        religion: 'jain',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'A financial analyst who enjoys hiking and photography in my free time.',
        basicDetails: {
            caste: 'Brahmin',
            maritalStatus: 'Widower',
            referenceId: 'PMF6355',
            gotra: 'Kaushik',
            dateOfBirth: '1993-7-10',
            gender: 'Male',
            height: '6Ft. 0In. (183 cm)',
            skinTone: 'Wheatish',
            bodyType: 'Average',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'Occasionally'
        },
        horoscopeDetails: {
            rashi: 'Kumbh',
            manglik: 'Partial Manglik',
            cityOfBirth: 'Mumbai',
            timeOfBirth: '6:15 am'
        },
        educationAndWorking: {
            qualification: 'MBA in Finance',
            profession: 'Financial Analyst',
            professionDetails: 'Working at a leading investment firm',
            workAddress: 'Mumbai',
            designation: 'Senior Analyst',
            annualIncome: '₹15,00,000',
            hobbies: 'Hiking, Photography, Reading'
        },
        contactDetails: {
            permanentAddress: '789, LMN Street, Mumbai',
            country: 'India',
            state: 'Maharashtra',
            city: 'Mumbai',
            pincode: '400001',
            contactNo: '9876543212'
        },
        familyDetails: {
            fathersName: 'Mr. Ramesh Wilson',
            fathersOccupation: 'Government Employee',
            mothersName: 'Mrs. Anita Wilson',
            mothersOccupation: 'Teacher',
            familyValue: 'Liberal',
            familySize: 'Nuclear',
            numberOfBrothers: 0,
            numberOfSisters: 1
        }
    },
    {
        id: 4,
        name: 'Alice Johnson',
        age: 27,
        gender: 'female',
        caste: 'multani',
        manglik: 'non_manglik',
        maritalStatus: 'never_married',
        religion: 'buddhist',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a teacher who loves to inspire young minds and explore new cultures.',
        basicDetails: {
            caste: 'Multani',
            maritalStatus: 'Never married',
            referenceId: 'PMF6356',
            gotra: '',
            dateOfBirth: '1997-9-20',
            gender: 'Female',
            height: '5Ft. 4In. (162 cm)',
            skinTone: 'Fair',
            bodyType: 'Slim',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'No'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Non Manglik',
            cityOfBirth: 'Jaipur',
            timeOfBirth: '10:00 am'
        },
        educationAndWorking: {
            qualification: 'M.A. in Education',
            profession: 'Teacher',
            professionDetails: 'Working at a reputed school',
            workAddress: 'Jaipur',
            designation: 'Senior Teacher',
            annualIncome: '₹6,00,000',
            hobbies: 'Reading, Traveling, Cooking'
        },
        contactDetails: {
            permanentAddress: '321, PQR Street, Jaipur',
            country: 'India',
            state: 'Rajasthan',
            city: 'Jaipur',
            pincode: '302001',
            contactNo: '9876543213'
        },
        familyDetails: {
            fathersName: 'Mr. Ramesh Johnson',
            fathersOccupation: 'Businessman',
            mothersName: 'Mrs. Sunita Johnson',
            mothersOccupation: 'Homemaker',
            familyValue: 'Moderate',
            familySize: 'Nuclear',
            numberOfBrothers: 1,
            numberOfSisters: 1
        }
    },
    {
        id: 5,
        name: 'Michael Brown',
        age: 32,
        gender: 'male',
        caste: 'other',
        manglik: 'manglik',
        maritalStatus: 'divorced',
        religion: 'hindu',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a marketing professional with a passion for digital marketing and analytics.',
        basicDetails: {
            caste: 'Other',
            maritalStatus: 'Divorced',
            referenceId: 'PMF6357',
            gotra: '',
            dateOfBirth: '1991-11-25',
            gender: 'Male',
            height: '5Ft. 10In. (178 cm)',
            skinTone: 'Wheatish',
            bodyType: 'Average',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'Occasionally'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Manglik',
            cityOfBirth: 'Chennai',
            timeOfBirth: '8:45 pm'
        },
        educationAndWorking: {
            qualification: 'MBA in Marketing',
            profession: 'Marketing Manager',
            professionDetails: 'Working at a leading marketing firm',
            workAddress: 'Chennai',
            designation: 'Marketing Manager',
            annualIncome: '₹12,00,000',
            hobbies: 'Digital Marketing, Analytics, Traveling'
        },
        contactDetails: {
            permanentAddress: '654, STU Street, Chennai',
            country: 'India',
            state: 'Tamil Nadu',
            city: 'Chennai',
            pincode: '600001',
            contactNo: '9876543214'
        },
        familyDetails: {
            fathersName: 'Mr. Rajesh Brown',
            fathersOccupation: 'Retired',
            mothersName: 'Mrs. Anita Brown',
            mothersOccupation: 'Homemaker',
            familyValue: 'Traditional',
            familySize: 'Nuclear',
            numberOfBrothers: 0,
            numberOfSisters: 2
        }
    },
    {
        id: 6,
        name: 'Emily Davis',
        age: 26,
        gender: 'female',
        caste: 'khatri',
        manglik: 'partial_manglik',
        maritalStatus: 'widow_widower',
        religion: 'sikh',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a fashion designer with a love for creating unique and stylish designs.',
        basicDetails: {
            caste: 'Khatri',
            maritalStatus: 'Widow',
            referenceId: 'PMF6358',
            gotra: '',
            dateOfBirth: '1998-2-14',
            gender: 'Female',
            height: '5Ft. 6In. (167 cm)',
            skinTone: 'Fair',
            bodyType: 'Slim',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'No'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Partial Manglik',
            cityOfBirth: 'Ludhiana',
            timeOfBirth: '3:20 pm'
        },
        educationAndWorking: {
            qualification: 'Diploma in Fashion Design',
            profession: 'Fashion Designer',
            professionDetails: 'Freelancer',
            workAddress: 'Ludhiana',
            designation: 'Fashion Designer',
            annualIncome: 'Ask directly',
            hobbies: 'Designing, Traveling, Music'
        },
        contactDetails: {
            permanentAddress: '987, VWX Street, Ludhiana',
            country: 'India',
            state: 'Punjab',
            city: 'Ludhiana',
            pincode: '141001',
            contactNo: '9876543215'
        },
        familyDetails: {
            fathersName: 'Mr. Harpreet Singh',
            fathersOccupation: 'Businessman',
            mothersName: 'Mrs. Gurpreet Kaur',
            mothersOccupation: 'Homemaker',
            familyValue: 'Traditional',
            familySize: 'Joint',
            numberOfBrothers: 1,
            numberOfSisters: 1
        }
    },
    {
        id: 7,
        name: 'David Wilson',
        age: 29,
        gender: 'male',
        caste: 'arora',
        manglik: 'non_manglik',
        maritalStatus: 'never_married',
        religion: 'jain',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a software developer with a passion for building scalable applications.',
        basicDetails: {
            caste: 'Arora',
            maritalStatus: 'Never married',
            referenceId: 'PMF6359',
            gotra: '',
            dateOfBirth: '1995-8-12',
            gender: 'Male',
            height: '5Ft. 8In. (173 cm)',
            skinTone: 'Fair',
            bodyType: 'Athletic',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'No'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Non Manglik',
            cityOfBirth: 'Ahmedabad',
            timeOfBirth: '11:30 am'
        },
        educationAndWorking: {
            qualification: 'B.Tech in Computer Science',
            profession: 'Software Developer',
            professionDetails: 'Working at a tech startup',
            workAddress: 'Ahmedabad',
            designation: 'Software Developer',
            annualIncome: '₹8,00,000',
            hobbies: 'Coding, Gaming, Traveling'
        },
        contactDetails: {
            permanentAddress: '654, YZA Street, Ahmedabad',
            country: 'India',
            state: 'Gujarat',
            city: 'Ahmedabad',
            pincode: '380001',
            contactNo: '9876543216'
        },
        familyDetails: {
            fathersName: 'Mr. Ramesh Wilson',
            fathersOccupation: 'Businessman',
            mothersName: 'Mrs. Anita Wilson',
            mothersOccupation: 'Homemaker',
            familyValue: 'Moderate',
            familySize: 'Nuclear',
            numberOfBrothers: 1,
            numberOfSisters: 0
        }
    },
    {
        id: 8,
        name: 'Sophia Martinez',
        age: 24,
        gender: 'female',
        caste: 'brahmin',
        manglik: 'manglik',
        maritalStatus: 'divorced',
        religion: 'buddhist',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a content writer with a love for storytelling and creative writing.',
        basicDetails: {
            caste: 'Brahmin',
            maritalStatus: 'Divorced',
            referenceId: 'PMF6360',
            gotra: '',
            dateOfBirth: '2000-4-5',
            gender: 'Female',
            height: '5Ft. 3In. (160 cm)',
            skinTone: 'Fair',
            bodyType: 'Slim',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'No'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Manglik',
            cityOfBirth: 'Pune',
            timeOfBirth: '9:00 am'
        },
        educationAndWorking: {
            qualification: 'B.A. in English Literature',
            profession: 'Content Writer',
            professionDetails: 'Freelancer',
            workAddress: 'Pune',
            designation: 'Content Writer',
            annualIncome: 'Ask directly',
            hobbies: 'Writing, Reading, Traveling'
        },
        contactDetails: {
            permanentAddress: '321, BCD Street, Pune',
            country: 'India',
            state: 'Maharashtra',
            city: 'Pune',
            pincode: '411001',
            contactNo: '9876543217'
        },
        familyDetails: {
            fathersName: 'Mr. Rajesh Martinez',
            fathersOccupation: 'Retired',
            mothersName: 'Mrs. Sunita Martinez',
            mothersOccupation: 'Homemaker',
            familyValue: 'Traditional',
            familySize: 'Nuclear',
            numberOfBrothers: 0,
            numberOfSisters: 1
        }
    },
    {
        id: 9,
        name: 'James Anderson',
        age: 31,
        gender: 'male',
        caste: 'multani',
        manglik: 'partial_manglik',
        maritalStatus: 'widow_widower',
        religion: 'hindu',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a financial consultant with a passion for helping people manage their finances.',
        basicDetails: {
            caste: 'Multani',
            maritalStatus: 'Widower',
            referenceId: 'PMF6361',
            gotra: '',
            dateOfBirth: '1992-12-18',
            gender: 'Male',
            height: '5Ft. 11In. (180 cm)',
            skinTone: 'Wheatish',
            bodyType: 'Average',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'Occasionally'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Partial Manglik',
            cityOfBirth: 'Hyderabad',
            timeOfBirth: '7:00 pm'
        },
        educationAndWorking: {
            qualification: 'MBA in Finance',
            profession: 'Financial Consultant',
            professionDetails: 'Working at a financial advisory firm',
            workAddress: 'Hyderabad',
            designation: 'Financial Consultant',
            annualIncome: '₹10,00,000',
            hobbies: 'Reading, Traveling, Music'
        },
        contactDetails: {
            permanentAddress: '789, EFG Street, Hyderabad',
            country: 'India',
            state: 'Telangana',
            city: 'Hyderabad',
            pincode: '500001',
            contactNo: '9876543218'
        },
        familyDetails: {
            fathersName: 'Mr. Ramesh Anderson',
            fathersOccupation: 'Retired',
            mothersName: 'Mrs. Anita Anderson',
            mothersOccupation: 'Homemaker',
            familyValue: 'Liberal',
            familySize: 'Nuclear',
            numberOfBrothers: 1,
            numberOfSisters: 0
        }
    },
    {
        id: 10,
        name: 'Olivia Thomas',
        age: 28,
        gender: 'female',
        caste: 'other',
        manglik: 'non_manglik',
        maritalStatus: 'never_married',
        religion: 'sikh',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a graphic designer with a love for creating visually appealing designs.',
        basicDetails: {
            caste: 'Other',
            maritalStatus: 'Never married',
            referenceId: 'PMF6362',
            gotra: '',
            dateOfBirth: '1996-6-22',
            gender: 'Female',
            height: '5Ft. 5In. (165 cm)',
            skinTone: 'Fair',
            bodyType: 'Slim',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'No'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Non Manglik',
            cityOfBirth: 'Chandigarh',
            timeOfBirth: '12:00 pm'
        },
        educationAndWorking: {
            qualification: 'B.Des in Graphic Design',
            profession: 'Graphic Designer',
            professionDetails: 'Working at a design agency',
            workAddress: 'Chandigarh',
            designation: 'Graphic Designer',
            annualIncome: '₹7,00,000',
            hobbies: 'Designing, Traveling, Music'
        },
        contactDetails: {
            permanentAddress: '123, HIJ Street, Chandigarh',
            country: 'India',
            state: 'Punjab',
            city: 'Chandigarh',
            pincode: '160001',
            contactNo: '9876543219'
        },
        familyDetails: {
            fathersName: 'Mr. Rajesh Thomas',
            fathersOccupation: 'Businessman',
            mothersName: 'Mrs. Sunita Thomas',
            mothersOccupation: 'Homemaker',
            familyValue: 'Moderate',
            familySize: 'Nuclear',
            numberOfBrothers: 1,
            numberOfSisters: 1
        }
    },
    {
        id: 11,
        name: 'Daniel Jackson',
        age: 33,
        gender: 'male',
        caste: 'khatri',
        manglik: 'manglik',
        maritalStatus: 'divorced',
        religion: 'jain',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a business analyst with a passion for data-driven decision-making.',
        basicDetails: {
            caste: 'Khatri',
            maritalStatus: 'Divorced',
            referenceId: 'PMF6363',
            gotra: '',
            dateOfBirth: '1990-1-10',
            gender: 'Male',
            height: '5Ft. 10In. (178 cm)',
            skinTone: 'Wheatish',
            bodyType: 'Average',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'Occasionally'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Manglik',
            cityOfBirth: 'Kolkata',
            timeOfBirth: '5:00 pm'
        },
        educationAndWorking: {
            qualification: 'MBA in Business Analytics',
            profession: 'Business Analyst',
            professionDetails: 'Working at a consulting firm',
            workAddress: 'Kolkata',
            designation: 'Business Analyst',
            annualIncome: '₹14,00,000',
            hobbies: 'Data Analysis, Traveling, Reading'
        },
        contactDetails: {
            permanentAddress: '456, KLM Street, Kolkata',
            country: 'India',
            state: 'West Bengal',
            city: 'Kolkata',
            pincode: '700001',
            contactNo: '9876543220'
        },
        familyDetails: {
            fathersName: 'Mr. Ramesh Jackson',
            fathersOccupation: 'Retired',
            mothersName: 'Mrs. Anita Jackson',
            mothersOccupation: 'Homemaker',
            familyValue: 'Traditional',
            familySize: 'Nuclear',
            numberOfBrothers: 1,
            numberOfSisters: 0
        }
    },
    {
        id: 12,
        name: 'Isabella White',
        age: 26,
        gender: 'female',
        caste: 'arora',
        manglik: 'partial_manglik',
        maritalStatus: 'widow_widower',
        religion: 'buddhist',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a photographer with a love for capturing beautiful moments.',
        basicDetails: {
            caste: 'Arora',
            maritalStatus: 'Widow',
            referenceId: 'PMF6364',
            gotra: '',
            dateOfBirth: '1998-3-15',
            gender: 'Female',
            height: '5Ft. 4In. (162 cm)',
            skinTone: 'Fair',
            bodyType: 'Slim',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'No'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Partial Manglik',
            cityOfBirth: 'Jaipur',
            timeOfBirth: '6:00 am'
        },
        educationAndWorking: {
            qualification: 'B.A. in Photography',
            profession: 'Photographer',
            professionDetails: 'Freelancer',
            workAddress: 'Jaipur',
            designation: 'Photographer',
            annualIncome: 'Ask directly',
            hobbies: 'Photography, Traveling, Music'
        },
        contactDetails: {
            permanentAddress: '789, NOP Street, Jaipur',
            country: 'India',
            state: 'Rajasthan',
            city: 'Jaipur',
            pincode: '302002',
            contactNo: '9876543221'
        },
        familyDetails: {
            fathersName: 'Mr. Rajesh White',
            fathersOccupation: 'Businessman',
            mothersName: 'Mrs. Sunita White',
            mothersOccupation: 'Homemaker',
            familyValue: 'Moderate',
            familySize: 'Nuclear',
            numberOfBrothers: 1,
            numberOfSisters: 1
        }
    },
    {
        id: 13,
        name: 'Matthew Harris',
        age: 29,
        gender: 'male',
        caste: 'brahmin',
        manglik: 'non_manglik',
        maritalStatus: 'never_married',
        religion: 'hindu',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a data scientist with a passion for machine learning and AI.',
        basicDetails: {
            caste: 'Brahmin',
            maritalStatus: 'Never married',
            referenceId: 'PMF6365',
            gotra: '',
            dateOfBirth: '1995-10-20',
            gender: 'Male',
            height: '5Ft. 9In. (175 cm)',
            skinTone: 'Fair',
            bodyType: 'Athletic',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'No'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Non Manglik',
            cityOfBirth: 'Bangalore',
            timeOfBirth: '8:00 am'
        },
        educationAndWorking: {
            qualification: 'M.Tech in Data Science',
            profession: 'Data Scientist',
            professionDetails: 'Working at a tech company',
            workAddress: 'Bangalore',
            designation: 'Data Scientist',
            annualIncome: '₹18,00,000',
            hobbies: 'Machine Learning, Coding, Traveling'
        },
        contactDetails: {
            permanentAddress: '123, QRS Street, Bangalore',
            country: 'India',
            state: 'Karnataka',
            city: 'Bangalore',
            pincode: '560001',
            contactNo: '9876543222'
        },
        familyDetails: {
            fathersName: 'Mr. Ramesh Harris',
            fathersOccupation: 'Businessman',
            mothersName: 'Mrs. Anita Harris',
            mothersOccupation: 'Homemaker',
            familyValue: 'Moderate',
            familySize: 'Nuclear',
            numberOfBrothers: 1,
            numberOfSisters: 0
        }
    },
    {
        id: 14,
        name: 'Ava Martin',
        age: 27,
        gender: 'female',
        caste: 'multani',
        manglik: 'manglik',
        maritalStatus: 'divorced',
        religion: 'sikh',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a teacher with a love for educating and inspiring young minds.',
        basicDetails: {
            caste: 'Multani',
            maritalStatus: 'Divorced',
            referenceId: 'PMF6366',
            gotra: '',
            dateOfBirth: '1997-7-25',
            gender: 'Female',
            height: '5Ft. 4In. (162 cm)',
            skinTone: 'Fair',
            bodyType: 'Slim',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'No'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Manglik',
            cityOfBirth: 'Amritsar',
            timeOfBirth: '10:00 am'
        },
        educationAndWorking: {
            qualification: 'M.A. in Education',
            profession: 'Teacher',
            professionDetails: 'Working at a reputed school',
            workAddress: 'Amritsar',
            designation: 'Senior Teacher',
            annualIncome: '₹6,00,000',
            hobbies: 'Teaching, Reading, Traveling'
        },
        contactDetails: {
            permanentAddress: '456, TUV Street, Amritsar',
            country: 'India',
            state: 'Punjab',
            city: 'Amritsar',
            pincode: '143002',
            contactNo: '9876543223'
        },
        familyDetails: {
            fathersName: 'Mr. Rajesh Martin',
            fathersOccupation: 'Businessman',
            mothersName: 'Mrs. Sunita Martin',
            mothersOccupation: 'Homemaker',
            familyValue: 'Traditional',
            familySize: 'Nuclear',
            numberOfBrothers: 1,
            numberOfSisters: 1
        }
    },
    {
        id: 15,
        name: 'Henry Lee',
        age: 30,
        gender: 'male',
        caste: 'other',
        manglik: 'partial_manglik',
        maritalStatus: 'widow_widower',
        religion: 'jain',
        image: 'https://via.placeholder.com/150',
        aboutMe: 'I am a software engineer with a passion for building innovative solutions.',
        basicDetails: {
            caste: 'Other',
            maritalStatus: 'Widower',
            referenceId: 'PMF6367',
            gotra: '',
            dateOfBirth: '1993-9-30',
            gender: 'Male',
            height: '5Ft. 10In. (178 cm)',
            skinTone: 'Wheatish',
            bodyType: 'Average',
            physicalDisability: 'No',
            disabilityReason: '',
            smoke: 'No',
            drink: 'Occasionally'
        },
        horoscopeDetails: {
            rashi: '',
            manglik: 'Partial Manglik',
            cityOfBirth: 'Chennai',
            timeOfBirth: '7:00 pm'
        },
        educationAndWorking: {
            qualification: 'B.Tech in Computer Science',
            profession: 'Software Engineer',
            professionDetails: 'Working at a tech company',
            workAddress: 'Chennai',
            designation: 'Senior Software Engineer',
            annualIncome: '₹12,00,000',
            hobbies: 'Coding, Reading, Traveling'
        },
        contactDetails: {
            permanentAddress: '789, WXY Street, Chennai',
            country: 'India',
            state: 'Tamil Nadu',
            city: 'Chennai',
            pincode: '600002',
            contactNo: '9876543224'
        },
        familyDetails: {
            fathersName: 'Mr. Ramesh Lee',
            fathersOccupation: 'Retired',
            mothersName: 'Mrs. Anita Lee',
            mothersOccupation: 'Homemaker',
            familyValue: 'Liberal',
            familySize: 'Nuclear',
            numberOfBrothers: 1,
            numberOfSisters: 0
        }
    }
];

export default dummyData;