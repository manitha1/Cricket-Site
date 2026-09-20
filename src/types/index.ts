// ============================================
// ACA — Apex Cricket Association
// Core TypeScript Types
// ============================================

export type TeamDivision = 'Premier League' | 'Division A' | 'Division B' | 'Division C' | 'Women' | 'Youth' | 'Corporate';

export type TournamentFormat = 'T20' | 'One Day' | 'Six-a-Side' | 'T10' | 'Test';

export type TournamentStatus = 'Upcoming' | 'Ongoing' | 'Completed' | 'Cancelled';

export type MatchStatus = 'Scheduled' | 'Live' | 'Completed' | 'Abandoned' | 'No Result';

export type PlayerRole = 'Batsman' | 'Bowler' | 'All-Rounder' | 'Wicket Keeper';

export type BattingStyle = 'Right Hand' | 'Left Hand';

export type BowlingStyle = 'Right Arm Fast' | 'Right Arm Medium' | 'Left Arm Fast' | 'Left Arm Medium' |
  'Right Arm Off-spin' | 'Right Arm Leg-spin' | 'Left Arm Orthodox' | 'Left Arm Wrist-spin' | 'N/A';

export type MembershipType = 'Full Member' | 'Associate Member' | 'Player Member' | 'Corporate Member' | 'Academy Member';

export type MembershipStatus = 'Active' | 'Pending' | 'Expired' | 'Suspended' | 'Rejected';

export type FacilityStatus = 'Available' | 'Booked' | 'Under Maintenance' | 'Closed';

export type BookingStatus = 'Pending' | 'Approved' | 'Rejected' | 'Cancelled' | 'Completed';

export type NewsStatus = 'Draft' | 'Published' | 'Archived';

export type NewsCategory = 'News' | 'Tournament' | 'Academy' | 'Announcement' | 'Community' | 'Events' | 'Match Report';

export type UserRole = 'super_admin' | 'administrator' | 'tournament_manager' | 'scorer' | 'team_manager' | 'coach' | 'member' | 'player' | 'public';

export type SponsorLevel = 'Title Sponsor' | 'Platinum' | 'Gold' | 'Silver' | 'Partner';

export type AcademyProgram = 'Beginner' | 'Junior' | 'Intermediate' | 'Advanced' | 'Elite';

export type AgeGroup = 'U10' | 'U12' | 'U14' | 'U16' | 'U18' | 'Open';

// ============================================

export interface Team {
  id: string;
  name: string;
  shortName: string;
  logo?: string;
  division: TeamDivision;
  captain: string;
  viceCaptain?: string;
  manager?: string;
  coach?: string;
  homeGround?: string;
  founded?: number;
  playerCount: number;
  colors?: string;
}

export interface Player {
  id: string;
  name: string;
  photo?: string;
  jerseyNumber?: number;
  teamId: string;
  teamName: string;
  role: PlayerRole;
  battingStyle: BattingStyle;
  bowlingStyle: BowlingStyle;
  dateOfBirth: string;
  nationality: string;
  ageGroup?: AgeGroup;
  stats: PlayerStats;
}

export interface PlayerStats {
  matches: number;
  innings: number;
  runs: number;
  highestScore: number;
  battingAverage: number;
  strikeRate: number;
  fifties: number;
  hundreds: number;
  fours: number;
  sixes: number;
  wickets: number;
  bowlingAverage: number;
  economy: number;
  bestBowling: string;
  fiveWicketHauls: number;
  catches: number;
  stumpings: number;
}

export interface Tournament {
  id: string;
  name: string;
  season: string;
  format: TournamentFormat;
  category: string;
  startDate: string;
  endDate: string;
  status: TournamentStatus;
  teams: number;
  matches: number;
  organizer: string;
  venue?: string;
  description?: string;
  logo?: string;
  prize?: string;
}

export interface Match {
  id: string;
  tournamentId: string;
  tournamentName: string;
  teamA: Team;
  teamB: Team;
  date: string;
  time: string;
  venue: string;
  status: MatchStatus;
  toss?: string;
  result?: string;
  umpire1?: string;
  umpire2?: string;
  scorer?: string;
  teamAScore?: string;
  teamBScore?: string;
  teamAOvers?: string;
  teamBOvers?: string;
  winnerName?: string;
}

export interface Scorecard {
  matchId: string;
  innings: 1 | 2;
  team: Team;
  battingScores: BattingScore[];
  bowlingScores: BowlingScore[];
  extras: number;
  total: string;
  overs: string;
  fallOfWickets?: string[];
}

export interface BattingScore {
  player: string;
  dismissal: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

export interface BowlingScore {
  player: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economy: number;
  wides: number;
  noBalls: number;
}

export interface PointsTableEntry {
  position: number;
  team: Team;
  played: number;
  won: number;
  lost: number;
  noResult: number;
  points: number;
  nrr: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  slug: string;
  category: NewsCategory;
  featuredImage?: string;
  content: string;
  excerpt: string;
  author: string;
  publishedAt: string;
  status: NewsStatus;
  tags?: string[];
}

export interface Facility {
  id: string;
  name: string;
  description: string;
  images: string[];
  openingHours: string;
  capacity?: number;
  features: string[];
  status: FacilityStatus;
  bookingAvailable: boolean;
}

export interface FacilityBooking {
  id: string;
  facilityId: string;
  facilityName: string;
  userId: string;
  userName: string;
  date: string;
  startTime: string;
  endTime: string;
  numberOfPeople: number;
  purpose: string;
  contactNumber: string;
  notes?: string;
  status: BookingStatus;
  createdAt: string;
}

export interface Member {
  id: string;
  fullName: string;
  dateOfBirth: string;
  nic?: string;
  address: string;
  phone: string;
  email: string;
  occupation?: string;
  membershipType: MembershipType;
  membershipStatus: MembershipStatus;
  membershipNumber?: string;
  joinedAt: string;
  expiresAt?: string;
  photo?: string;
}

export interface AcademyStudent {
  id: string;
  name: string;
  dateOfBirth: string;
  parentName: string;
  phone: string;
  email: string;
  address: string;
  emergencyContact: string;
  program: AcademyProgram;
  ageGroup: AgeGroup;
  previousExperience?: string;
  enrolledAt: string;
  status: 'Active' | 'Inactive' | 'Graduated';
}

export interface Coach {
  id: string;
  name: string;
  photo?: string;
  qualification: string;
  experience: string;
  specialization: string;
  bio?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  website?: string;
  level: SponsorLevel;
  active: boolean;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  category: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export interface CommitteeMember {
  id: string;
  name: string;
  position: string;
  photo?: string;
  bio?: string;
}

export interface AssociationStats {
  totalTeams: number;
  totalPlayers: number;
  annualTournaments: number;
  matchesPerYear: number;
  totalMembers: number;
  yearsEstablished: number;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  capacity?: number;
  facilities?: string[];
}

export interface GalleryImage {
  id: string;
  url: string;
  title?: string;
  category: string;
  uploadedAt: string;
  alt?: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
}
