# **Healthify Web App**

### **What is Healthify?**

> _Healthify_ allows patients to search for and explore doctors based on their specialty, location, availability, and reviews. Patients can then reserve an appointment with their chosen doctor at a convenient time and date. The app provides a user-friendly interface that simplifies the process of finding and booking a doctor's appointment.

### **Used Technologies**

- Client side:
  1. HTML 5
  2. CSS 3
  3. TypeScript
  4. React.js
  5. Redux Toolkit
- Server side:
  1. TypeScript
  2. Node.js
  3. Express.js
  4. REST API
  5. JSON Web Token (for handling authorization)
  6. Multer (for handling file uploads)
  7. TDB: (Prisma / Mongoose)
  8. TBD: (PostgreSQL / MongoDB)

### **UI Design**

1. [Figma](https://www.figma.com/file/oHg6gxAFgMvBN09A6XxDTA/Healthify?type=design&node-id=0%3A1&t=seLvtMwN2miTJftR-1)
2. [Phosphor Icons](https://phosphoricons.com/)
3. [Pexels](https://www.pexels.com/)
4. [Font Share](https://www.fontshare.com/)
5. [Realtime Colors](https://realtimecolors.com/)

### **TODOs**

- [ ] `CarouselSection`

  - Adopt both slidesWidth, cardWidth to screen size changing

- [ ] `FiltersSection`

  - Doctors should be filtered based on:
    - Rating
    - Verification status
    - Name
    - Specialization
    - Location
    - Price

- [x] Build the `DoctorPage`

### **Modifications #16**

> 1. Added `newsletter` API route
> 2. Removed both `ActionInput` & attribution from the footer
> 3. Added fake social media links
> 4. Fixed `DoctorCard` responsiveness
> 5. Modified `DoctorProfile` layout
