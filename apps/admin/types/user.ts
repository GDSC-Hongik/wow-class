import type { ManageRole, StudyRole, UserRoleType } from "./role";
import type { Status, UnivEmailStatus } from "./status";

export type User = {
  memberId: string; // C000000 (학번)
  role: UserRoleType;
  basicInfo: UserBasicInfo;
  manageRole: ManageRole;
  studyRole: StudyRole;
  associateRequirement: {
    univStatus: UnivEmailStatus;
    discordStatus: Status;
    bevyStatus: Status;
    infoStatus: Status;
  };
};

export type AssociateRequirement = {
  univStatus: UnivEmailStatus;
  discordStatus: Status;
  bevyStatus: Status;
  infoStatus: Status;
};

export type UserBasicInfo = {
  name: string;
  studentId: string;
  email: string;
  department: string;
  phone: string;
  discordUsername: string;
  nickname: string;
};
