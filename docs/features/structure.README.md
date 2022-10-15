Folder Structure Conventions
============================ 

### Current Folder Structure

    .
    ├── docs                                # Documentation files (alternatively `doc`)
    ├── test                                # Automated tests (alternatively `spec` or `tests`)
    ├── README.md                           # Important Instructions
    └── src                                 # Source files
         └── aws                            # Aws services
         |     ├── aws.module.ts
         |     └── aws.service.ts
         ├── database                       # Entities and Repositories
         |     ├── database.module.ts
         |     ├── entities
         |     |   ├── Base.entity.ts
         |     |   └── User.entity.ts
         |     └── repositories
         |         └── User.repository.ts
         ├── env                            # Environment Variables loaded from pm2 file
         |     └── env.config.ts
         ├── interfaces                     # Global types
         |     ├── config.interface.ts
         |     └── mail.interface.ts
         ├── services                       # Global level services [Bcrypt and Otp]
         |     ├── bcrypt.service.ts
         |     └── otp.service.ts
         ├── user                           # User Module
         |     ├── user.controller.ts
         |     ├── user.service.ts
         |     ├── user.module.ts.ts
         |     └── dto
         |         ├── request.dto.ts
         |         └── response.dto.ts
         ├── utilities                      # Helper Functions & Interceptors
         |     ├── interceptors
         |     |   └── app.interceptor.ts
         |     └── transformers
         |         └── mail.transformers.ts
         └── test                           # Test Files
          