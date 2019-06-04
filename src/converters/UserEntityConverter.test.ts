import { createUserEntities } from "./UserEntityConverter";

test("convert users", async () => {
  const users = [
    {
      kind: "admin#directory#user",
      id: "3",
      etag: '"GPUJN6YVAOElesyqxtgGs7jrFWY/_zaFZteCL0r673-3Z8E_ix87QNw"',
      primaryEmail: "first.user@example.com",
      name: {
        givenName: "fakeName",
        familyName: "fakeFamilyName",
        fullName: "fakeName fakeFamilyName",
      },
      gender: "male",
      isAdmin: true,
      isDelegatedAdmin: false,
      lastLoginTime: "2019-02-12T11:42:33.000Z",
      creationTime: "2019-01-28T17:42:32.000Z",
      agreedToTerms: true,
      suspended: false,
      archived: false,
      changePasswordAtNextLogin: false,
      ipWhitelisted: false,
      emails: [
        { address: "first.user@dualbootpartners.com", type: "work" },
        { address: "first.user@example.com", primary: true },
        { address: "first.user@example.com.test-google-a.com" },
        { address: "fakeName1@example.com" },
        { address: "fakeName1@example.com.test-google-a.com" },
        { address: "fakeFamilyName1@example.com" },
        { address: "fakeFamilyName1@example.com.test-google-a.com" },
      ],
      externalIds: [{ value: "123", type: "organization" }],
      relations: [{ value: "manager@example.com", type: "manager" }],
      addresses: [
        {
          type: "home",
          formatted: "Sample Streeet Samle country, 000000",
        },
        {
          type: "work",
          formatted: "Sample Streeet Samle country, 000000",
        },
        {
          type: "home",
          formatted: "Sample Streeet Samle country, 0000132",
        },
      ],
      organizations: [
        {
          title: "Team Lead",
          primary: true,
          customType: "",
          department: "Customer Relationship",
          description: "Developer",
          costCenter: "Cost Center",
        },
      ],
      phones: [
        { value: "79298282828282", type: "home" },
        { value: "3123123", type: "work" },
      ],
      aliases: ["fakeName1@example.com", "fakeFamilyName1@example.com"],
      nonEditableAliases: [
        "first.user@example.com.test-google-a.com",
        "fakeFamilyName1@example.com.test-google-a.com",
        "fakeName1@example.com.test-google-a.com",
      ],
      customerId: "fakeID",
      orgUnitPath: "/",
      isMailboxSetup: true,
      isEnrolledIn2Sv: false,
      isEnforcedIn2Sv: false,
      includeInGlobalAddressList: true,
      locations: [
        {
          type: "desk",
          area: "desk",
          buildingId: "123",
          floorName: "3",
          floorSection: "2",
        },
      ],
      customSchemas: {
        Custom_Category: {
          Must_Be_Visible: "2019-06-03",
        },
        Test: {
          firstName: "duplicateProperty",
          bitbucketUsername: "test@bitbucket.com",
          githubUsername: "test@github.com",
        },
      },
    },
    {
      kind: "admin#directory#user",
      id: "4",
      etag: '"GPUJN6YVAOElesyqxtgGs7jrFWY/y25ZdINZzVAR37bhApqlbGVeeVc"',
      primaryEmail: "fake.user2@example.com",
      name: {
        givenName: "FakeName2",
        familyName: "FakeFamilyName2",
        fullName: "FakeName2 FakeFamilyName2",
      },
      relations: [{ value: "Manager Name", type: "manager" }],
      gender: {
        type: "female",
      },
      isAdmin: true,
      isDelegatedAdmin: false,
      lastLoginTime: "2019-01-30T11:44:02.000Z",
      creationTime: "2019-01-28T17:32:12.000Z",
      agreedToTerms: true,
      suspended: false,
      archived: true,
      changePasswordAtNextLogin: false,
      ipWhitelisted: false,
      emails: [
        { address: "fake.user2@example.com", primary: true },
        { address: "fake.user2@example.com.test-google-a.com" },
      ],
      nonEditableAliases: ["fake.user2@example.com.test-google-a.com"],
      customerId: "fakeID",
      orgUnitPath: "/",
      isMailboxSetup: true,
      isEnrolledIn2Sv: false,
      isEnforcedIn2Sv: true,
      includeInGlobalAddressList: true,
    },
    {
      kind: "admin#directory#user",
      id: "5",
      etag: '"GPUJN6YVAOElesyqxtgGs7jrFWY/fJ1sXMD9dGOa08hdg-FUHxWI3Uk"',
      primaryEmail: "test@example.com",
      name: {
        givenName: "Test",
        familyName: "user",
        fullName: "Test user",
      },
      gender: {
        type: "other",
        customGender: "custom business",
      },
      isAdmin: false,
      isDelegatedAdmin: false,
      lastLoginTime: "1970-01-01T00:00:00.000Z",
      creationTime: "2019-01-30T15:20:22.000Z",
      agreedToTerms: true,
      suspended: true,
      archived: false,
      changePasswordAtNextLogin: true,
      ipWhitelisted: false,
      emails: [
        { address: "test@example.com", primary: true },
        { address: "test@example.com.test-google-a.com" },
      ],
      nonEditableAliases: ["test@example.com.test-google-a.com"],
      customerId: "fakeID",
      orgUnitPath: "/",
      isMailboxSetup: true,
      isEnrolledIn2Sv: true,
      isEnforcedIn2Sv: false,
      includeInGlobalAddressList: true,
    },
    {
      kind: "admin#directory#user",
      id: "6",
      etag: '"GPUJN6YVAOElesyqxtgGs7jrFWY/fJ1sXMD9dGOa08hdg-FUHxWI3Uk"',
      primaryEmail: "test1example.com",
      name: undefined,
      isAdmin: false,
      organizations: [],
      isDelegatedAdmin: false,
      lastLoginTime: "1970-01-01T00:00:00.000Z",
      creationTime: "2019-01-30T15:20:22.000Z",
      agreedToTerms: true,
      suspended: false,
      archived: false,
      changePasswordAtNextLogin: true,
      ipWhitelisted: false,
      emails: [
        { address: "test@example.com", primary: true },
        { address: "test@example.com.test-google-a.com" },
      ],
      nonEditableAliases: ["test@example.com.test-google-a.com"],
      customerId: "fakeID",
      orgUnitPath: "/",
      isMailboxSetup: true,
      isEnrolledIn2Sv: true,
      isEnforcedIn2Sv: true,
      includeInGlobalAddressList: true,
    },
    {
      kind: "admin#directory#user",
      id: "7",
      etag: '"GPUJN6YVAOElesyqxtgGs7jrFWY/fJ1sXMD9dGOa08hdg-FUHxWI3Uk"',
      name: undefined,
      isAdmin: false,
      organizations: [],
      isDelegatedAdmin: false,
      lastLoginTime: "1970-01-01T00:00:00.000Z",
      creationTime: "2019-01-30T15:20:22.000Z",
      agreedToTerms: true,
      suspended: false,
      archived: false,
      changePasswordAtNextLogin: true,
      ipWhitelisted: false,
      nonEditableAliases: ["test@example.com.test-google-a.com"],
      customerId: "fakeID",
      orgUnitPath: "/",
      isMailboxSetup: true,
      isEnrolledIn2Sv: true,
      isEnforcedIn2Sv: true,
      includeInGlobalAddressList: true,
    },
  ];

  const entities = createUserEntities(users);

  expect(entities).toEqual([
    {
      Must_Be_Visible: "2019-06-03",
      _class: "User",
      _key: "google_user_3",
      _type: "google_user",
      active: true,
      agreedToTerms: true,
      aliases: ["fakeName1@example.com", "fakeFamilyName1@example.com"],
      archived: false,
      bitbucketUsername: "test@bitbucket.com",
      changePasswordAtNextLogin: false,
      costCenter: "Cost Center",
      creationTime: 1548697352000,
      customFirstName: "duplicateProperty",
      customType: "",
      customerId: "fakeID",
      department: "Customer Relationship",
      displayName: "fakeName fakeFamilyName",
      email: "first.user@example.com",
      employeeType: "Developer",
      firstName: "fakeName",
      githubUsername: "test@github.com",
      homeAddress: "Sample Streeet Samle country, 0000132",
      homePhone: "79298282828282",
      id: "3",
      includeInGlobalAddressList: true,
      ipWhitelisted: false,
      isAdmin: true,
      isDelegatedAdmin: false,
      isEnforcedIn2Sv: false,
      isEnrolledIn2Sv: false,
      isMailboxSetup: true,
      kind: "admin#directory#user",
      lastLoginTime: 1549971753000,
      lastName: "fakeFamilyName",
      managerEmail: "manager@example.com",
      managerRelation: "manager@example.com",
      mfaEnabled: false,
      orgUnitPath: "/",
      organizationExternalId: "123",
      primaryEmail: "first.user@example.com",
      suspended: false,
      title: "Team Lead",
      username: "first.user",
      workAddress: "Sample Streeet Samle country, 000000",
      workEmail: "first.user@dualbootpartners.com",
      workPhone: "3123123",
    },
    {
      _class: "User",
      _key: "google_user_4",
      _type: "google_user",
      active: true,
      agreedToTerms: true,
      archived: true,
      changePasswordAtNextLogin: false,
      creationTime: 1548696732000,
      customerId: "fakeID",
      displayName: "FakeName2 FakeFamilyName2",
      email: "fake.user2@example.com",
      firstName: "FakeName2",
      id: "4",
      includeInGlobalAddressList: true,
      ipWhitelisted: false,
      isAdmin: true,
      isDelegatedAdmin: false,
      isEnforcedIn2Sv: true,
      isEnrolledIn2Sv: false,
      isMailboxSetup: true,
      kind: "admin#directory#user",
      lastLoginTime: 1548848642000,
      lastName: "FakeFamilyName2",
      manager: "Manager Name",
      managerRelation: "Manager Name",
      mfaEnabled: false,
      orgUnitPath: "/",
      primaryEmail: "fake.user2@example.com",
      suspended: false,
      username: "fake.user2",
    },
    {
      _class: "User",
      _key: "google_user_5",
      _type: "google_user",
      active: true,
      agreedToTerms: true,
      archived: false,
      changePasswordAtNextLogin: true,
      creationTime: 1548861622000,
      customerId: "fakeID",
      displayName: "Test user",
      email: "test@example.com",
      firstName: "Test",
      id: "5",
      includeInGlobalAddressList: true,
      ipWhitelisted: false,
      isAdmin: false,
      isDelegatedAdmin: false,
      isEnforcedIn2Sv: false,
      isEnrolledIn2Sv: true,
      isMailboxSetup: true,
      kind: "admin#directory#user",
      lastLoginTime: 0,
      lastName: "user",
      mfaEnabled: false,
      orgUnitPath: "/",
      primaryEmail: "test@example.com",
      suspended: true,
      username: "test",
    },
    {
      _class: "User",
      _key: "google_user_6",
      _type: "google_user",
      active: true,
      agreedToTerms: true,
      archived: false,
      changePasswordAtNextLogin: true,
      creationTime: 1548861622000,
      customerId: "fakeID",
      displayName: "",
      email: "test1example.com",
      id: "6",
      includeInGlobalAddressList: true,
      ipWhitelisted: false,
      isAdmin: false,
      isDelegatedAdmin: false,
      isEnforcedIn2Sv: true,
      isEnrolledIn2Sv: true,
      isMailboxSetup: true,
      kind: "admin#directory#user",
      lastLoginTime: 0,
      mfaEnabled: true,
      orgUnitPath: "/",
      primaryEmail: "test1example.com",
      suspended: false,
    },
    {
      _class: "User",
      _key: "google_user_7",
      _type: "google_user",
      active: true,
      agreedToTerms: true,
      archived: false,
      changePasswordAtNextLogin: true,
      creationTime: 1548861622000,
      customerId: "fakeID",
      displayName: "",
      id: "7",
      includeInGlobalAddressList: true,
      ipWhitelisted: false,
      isAdmin: false,
      isDelegatedAdmin: false,
      isEnforcedIn2Sv: true,
      isEnrolledIn2Sv: true,
      isMailboxSetup: true,
      kind: "admin#directory#user",
      lastLoginTime: 0,
      mfaEnabled: true,
      orgUnitPath: "/",
      suspended: false,
    },
  ]);
});
