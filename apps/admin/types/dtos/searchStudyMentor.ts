export interface SearchStudyMentorResponseDto {
  memberId: number;
  studentId: string;
  name: string;
  phone: string;
  department: {
    code: string;
    name: string;
  };
  email: string;
  discordUsername: string;
  nickname: string;
  requirement: {
    univStatus: string;
    discordStatus: string;
    bevyStatus: string;
  };
}
