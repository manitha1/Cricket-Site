// ============================================
// ACA Mock Data — Realistic demo data
// ============================================
import type {
  Team, Player, Tournament, Match, PointsTableEntry,
  NewsArticle, Facility, Sponsor, CommitteeMember,
  AssociationStats, Coach, GalleryImage
} from '../types';

// ============================================
// TEAMS
// ============================================
export const teams: Team[] = [
  {
    id: 't1', name: 'Apex Warriors', shortName: 'APW', division: 'Premier League',
    captain: 'Kavin Perera', viceCaptain: 'Roshan Silva', manager: 'Saman Fernando',
    coach: 'Dilshan Jayawardena', homeGround: 'Apex Cricket Ground', founded: 2015,
    playerCount: 18, colors: '#0B3D2E & #F5B301',
    logo: 'https://ui-avatars.com/api/?name=AW&background=0B3D2E&color=F5B301&bold=true&size=128',
  },
  {
    id: 't2', name: 'Apex Titans', shortName: 'APT', division: 'Premier League',
    captain: 'Nuwan Bandara', viceCaptain: 'Chamara Lakshan', manager: 'Priya Wickrama',
    coach: 'Rajiv Gunawardena', homeGround: 'Apex Cricket Ground', founded: 2014,
    playerCount: 17, colors: '#1E3A5F & #FFFFFF',
    logo: 'https://ui-avatars.com/api/?name=AT&background=1E3A5F&color=FFFFFF&bold=true&size=128',
  },
  {
    id: 't3', name: 'Apex Lions', shortName: 'APL', division: 'Premier League',
    captain: 'Tharanga Wijesinghe', viceCaptain: 'Asela Niroshan', manager: 'Sunimal De Silva',
    coach: 'Pradeep Jayantha', homeGround: 'Apex Cricket Ground', founded: 2016,
    playerCount: 19, colors: '#7B2D00 & #FFF',
    logo: 'https://ui-avatars.com/api/?name=AL&background=7B2D00&color=FFF&bold=true&size=128',
  },
  {
    id: 't4', name: 'Apex Kings', shortName: 'APK', division: 'Premier League',
    captain: 'Malith Samarasinghe', viceCaptain: 'Yasiru Chathuranga', manager: 'Dilupa Rathnayake',
    coach: 'Nimal Fernando', homeGround: 'Apex Training Ground', founded: 2017,
    playerCount: 16, colors: '#6B21A8 & #FFF',
    logo: 'https://ui-avatars.com/api/?name=AK&background=6B21A8&color=FFF&bold=true&size=128',
  },
  {
    id: 't5', name: 'Colombo Strikers', shortName: 'CSK', division: 'Division A',
    captain: 'Shehan Madushanka', viceCaptain: 'Chanaka Weerasinghe', manager: 'Kasun Ranatunga',
    coach: 'Lalith Kapila', homeGround: 'Colombo Municipal Ground', founded: 2013,
    playerCount: 18, colors: '#0369A1 & #F5B301',
    logo: 'https://ui-avatars.com/api/?name=CS&background=0369A1&color=F5B301&bold=true&size=128',
  },
  {
    id: 't6', name: 'Western Eagles', shortName: 'WEG', division: 'Division A',
    captain: 'Dimuth Rajapaksa', viceCaptain: 'Supun Rathnayake', manager: 'Aruna Peris',
    coach: 'Ranjan Madugalle', homeGround: 'Western Sports Complex', founded: 2018,
    playerCount: 15, colors: '#92400E & #FFF',
    logo: 'https://ui-avatars.com/api/?name=WE&background=92400E&color=FFF&bold=true&size=128',
  },
  {
    id: 't7', name: 'Capital Challengers', shortName: 'CAP', division: 'Division A',
    captain: 'Gayan Suraweera', viceCaptain: 'Thilina Kandamby', manager: 'Kelum Dissanayake',
    coach: 'Bandula Warnapura', homeGround: 'Capital Cricket Arena', founded: 2019,
    playerCount: 17, colors: '#1D4ED8 & #FBBF24',
    logo: 'https://ui-avatars.com/api/?name=CC&background=1D4ED8&color=FBBF24&bold=true&size=128',
  },
  {
    id: 't8', name: 'Southern Sharks', shortName: 'SSK', division: 'Division A',
    captain: 'Lakshan Sandakan', viceCaptain: 'Sampath Bandara', manager: 'Ranjith Hewage',
    coach: 'Chaminda Vaas', homeGround: 'Galle Cricket Ground', founded: 2016,
    playerCount: 18, colors: '#0F766E & #F5B301',
    logo: 'https://ui-avatars.com/api/?name=SS&background=0F766E&color=F5B301&bold=true&size=128',
  },
];

// ============================================
// PLAYERS
// ============================================
export const players: Player[] = [
  {
    id: 'p1', name: 'Kavin Perera', jerseyNumber: 7,
    teamId: 't1', teamName: 'Apex Warriors', role: 'Batsman',
    battingStyle: 'Right Hand', bowlingStyle: 'Right Arm Medium',
    dateOfBirth: '1995-03-14', nationality: 'Sri Lankan',
    photo: 'https://ui-avatars.com/api/?name=KP&background=0B3D2E&color=F5B301&size=128',
    stats: { matches: 68, innings: 65, runs: 2842, highestScore: 127, battingAverage: 48.2, strikeRate: 142.3, fifties: 18, hundreds: 4, fours: 289, sixes: 112, wickets: 8, bowlingAverage: 38.5, economy: 8.2, bestBowling: '2/18', fiveWicketHauls: 0, catches: 34, stumpings: 0 },
  },
  {
    id: 'p2', name: 'Roshan Silva', jerseyNumber: 17,
    teamId: 't1', teamName: 'Apex Warriors', role: 'All-Rounder',
    battingStyle: 'Left Hand', bowlingStyle: 'Left Arm Orthodox',
    dateOfBirth: '1997-08-22', nationality: 'Sri Lankan',
    photo: 'https://ui-avatars.com/api/?name=RS&background=16A34A&color=FFF&size=128',
    stats: { matches: 54, innings: 50, runs: 1456, highestScore: 89, battingAverage: 31.4, strikeRate: 128.7, fifties: 9, hundreds: 0, fours: 148, sixes: 62, wickets: 42, bowlingAverage: 22.4, economy: 7.1, bestBowling: '4/18', fiveWicketHauls: 0, catches: 22, stumpings: 0 },
  },
  {
    id: 'p3', name: 'Sahan Kaluperuma', jerseyNumber: 3,
    teamId: 't1', teamName: 'Apex Warriors', role: 'Wicket Keeper',
    battingStyle: 'Right Hand', bowlingStyle: 'N/A',
    dateOfBirth: '1998-11-05', nationality: 'Sri Lankan',
    photo: 'https://ui-avatars.com/api/?name=SK&background=0B3D2E&color=F5B301&size=128',
    stats: { matches: 48, innings: 44, runs: 987, highestScore: 76, battingAverage: 24.7, strikeRate: 118.4, fifties: 4, hundreds: 0, fours: 98, sixes: 32, wickets: 0, bowlingAverage: 0, economy: 0, bestBowling: '0/0', fiveWicketHauls: 0, catches: 58, stumpings: 24 },
  },
  {
    id: 'p4', name: 'Dimuth Chathuranga', jerseyNumber: 22,
    teamId: 't1', teamName: 'Apex Warriors', role: 'Bowler',
    battingStyle: 'Right Hand', bowlingStyle: 'Right Arm Fast',
    dateOfBirth: '1996-06-18', nationality: 'Sri Lankan',
    photo: 'https://ui-avatars.com/api/?name=DC&background=16A34A&color=FFF&size=128',
    stats: { matches: 60, innings: 42, runs: 312, highestScore: 28, battingAverage: 10.4, strikeRate: 88.2, fifties: 0, hundreds: 0, fours: 34, sixes: 8, wickets: 94, bowlingAverage: 18.7, economy: 6.8, bestBowling: '5/22', fiveWicketHauls: 2, catches: 18, stumpings: 0 },
  },
  {
    id: 'p5', name: 'Nuwan Bandara', jerseyNumber: 10,
    teamId: 't2', teamName: 'Apex Titans', role: 'All-Rounder',
    battingStyle: 'Right Hand', bowlingStyle: 'Right Arm Off-spin',
    dateOfBirth: '1994-12-30', nationality: 'Sri Lankan',
    photo: 'https://ui-avatars.com/api/?name=NB&background=1E3A5F&color=FFF&size=128',
    stats: { matches: 72, innings: 68, runs: 2234, highestScore: 112, battingAverage: 36.6, strikeRate: 132.8, fifties: 14, hundreds: 2, fours: 212, sixes: 88, wickets: 58, bowlingAverage: 24.2, economy: 7.4, bestBowling: '4/28', fiveWicketHauls: 0, catches: 41, stumpings: 0 },
  },
  {
    id: 'p6', name: 'Tharanga Wijesinghe', jerseyNumber: 4,
    teamId: 't3', teamName: 'Apex Lions', role: 'Batsman',
    battingStyle: 'Left Hand', bowlingStyle: 'Right Arm Medium',
    dateOfBirth: '1993-04-09', nationality: 'Sri Lankan',
    photo: 'https://ui-avatars.com/api/?name=TW&background=7B2D00&color=FFF&size=128',
    stats: { matches: 84, innings: 80, runs: 3412, highestScore: 148, battingAverage: 46.1, strikeRate: 138.9, fifties: 22, hundreds: 6, fours: 348, sixes: 124, wickets: 5, bowlingAverage: 54.2, economy: 9.1, bestBowling: '1/12', fiveWicketHauls: 0, catches: 28, stumpings: 0 },
  },
  {
    id: 'p7', name: 'Asela Niroshan', jerseyNumber: 14,
    teamId: 't3', teamName: 'Apex Lions', role: 'Bowler',
    battingStyle: 'Right Hand', bowlingStyle: 'Right Arm Leg-spin',
    dateOfBirth: '1999-07-21', nationality: 'Sri Lankan',
    photo: 'https://ui-avatars.com/api/?name=AN&background=7B2D00&color=FFF&size=128',
    stats: { matches: 58, innings: 40, runs: 218, highestScore: 32, battingAverage: 9.1, strikeRate: 76.3, fifties: 0, hundreds: 0, fours: 22, sixes: 6, wickets: 88, bowlingAverage: 21.3, economy: 7.2, bestBowling: '5/18', fiveWicketHauls: 3, catches: 24, stumpings: 0 },
  },
  {
    id: 'p8', name: 'Shehan Madushanka', jerseyNumber: 1,
    teamId: 't5', teamName: 'Colombo Strikers', role: 'Batsman',
    battingStyle: 'Right Hand', bowlingStyle: 'N/A',
    dateOfBirth: '1996-02-14', nationality: 'Sri Lankan',
    photo: 'https://ui-avatars.com/api/?name=SM&background=0369A1&color=F5B301&size=128',
    stats: { matches: 62, innings: 58, runs: 2188, highestScore: 134, battingAverage: 42.1, strikeRate: 144.2, fifties: 13, hundreds: 3, fours: 224, sixes: 96, wickets: 0, bowlingAverage: 0, economy: 0, bestBowling: '0/0', fiveWicketHauls: 0, catches: 30, stumpings: 0 },
  },
];

// ============================================
// TOURNAMENTS
// ============================================
export const tournaments: Tournament[] = [
  {
    id: 'tr1', name: 'Apex Premier League 2026', season: '2026',
    format: 'T20', category: 'Premier League',
    startDate: '2026-08-01', endDate: '2026-11-30',
    status: 'Ongoing', teams: 12, matches: 66,
    organizer: 'Apex Cricket Association',
    venue: 'Apex Cricket Ground',
    description: 'The flagship T20 tournament of Apex Cricket Association featuring the best teams from the region.',
    prize: 'LKR 2,000,000',
  },
  {
    id: 'tr2', name: 'Apex T20 Championship 2026', season: '2026',
    format: 'T20', category: 'Division A',
    startDate: '2026-07-15', endDate: '2026-09-28',
    status: 'Ongoing', teams: 8, matches: 28,
    organizer: 'Apex Cricket Association',
    venue: 'Apex Training Ground',
    description: 'Annual T20 championship for Division A teams.',
    prize: 'LKR 500,000',
  },
  {
    id: 'tr3', name: 'Apex Corporate Sixes 2026', season: '2026',
    format: 'Six-a-Side', category: 'Corporate Cricket',
    startDate: '2026-10-10', endDate: '2026-10-12',
    status: 'Upcoming', teams: 16, matches: 45,
    organizer: 'Apex Cricket Association',
    venue: 'Apex Cricket Ground',
    description: 'Fun six-a-side tournament for corporate teams.',
    prize: 'LKR 300,000',
  },
  {
    id: 'tr4', name: 'Apex Youth Championship U18 2026', season: '2026',
    format: 'T20', category: 'Youth Cricket',
    startDate: '2026-09-01', endDate: '2026-10-31',
    status: 'Upcoming', teams: 10, matches: 30,
    organizer: 'Apex Cricket Academy',
    venue: 'Apex Training Ground',
    description: 'Youth cricket championship for under-18 players from the ACA Academy.',
  },
  {
    id: 'tr5', name: 'Apex One Day Championship 2025', season: '2025',
    format: 'One Day', category: 'Division B',
    startDate: '2025-02-01', endDate: '2025-05-15',
    status: 'Completed', teams: 8, matches: 28,
    organizer: 'Apex Cricket Association',
    venue: 'Apex Cricket Ground',
    description: 'One Day championship 2025 season.',
    prize: 'LKR 400,000',
  },
];

// ============================================
// MATCHES
// ============================================
export const liveMatches: Match[] = [
  {
    id: 'm1', tournamentId: 'tr1', tournamentName: 'Apex Premier League 2026',
    teamA: teams[0], teamB: teams[1],
    date: '2026-09-20', time: '14:00', venue: 'Apex Cricket Ground',
    status: 'Live', toss: 'Apex Warriors won toss, elected to bat',
    teamAScore: '142/5', teamAOvers: '18.2',
    teamBScore: '136/8', teamBOvers: '20',
    result: 'Warriors won by 6 runs', winnerName: 'Apex Warriors',
    umpire1: 'Ranjith Perera', umpire2: 'Kumar Dharmasena', scorer: 'Chamara Silva',
  },
];

export const upcomingMatches: Match[] = [
  {
    id: 'm2', tournamentId: 'tr1', tournamentName: 'Apex Premier League 2026',
    teamA: teams[0], teamB: teams[4],
    date: '2026-09-22', time: '10:00', venue: 'Apex Cricket Ground',
    status: 'Scheduled',
  },
  {
    id: 'm3', tournamentId: 'tr2', tournamentName: 'Apex T20 Championship 2026',
    teamA: teams[1], teamB: teams[2],
    date: '2026-09-23', time: '14:00', venue: 'Apex Training Ground',
    status: 'Scheduled',
  },
  {
    id: 'm4', tournamentId: 'tr1', tournamentName: 'Apex Premier League 2026',
    teamA: teams[3], teamB: teams[5],
    date: '2026-09-25', time: '10:00', venue: 'Apex Cricket Ground',
    status: 'Scheduled',
  },
  {
    id: 'm5', tournamentId: 'tr2', tournamentName: 'Apex T20 Championship 2026',
    teamA: teams[6], teamB: teams[7],
    date: '2026-09-26', time: '14:00', venue: 'Apex Training Ground',
    status: 'Scheduled',
  },
];

export const recentResults: Match[] = [
  {
    id: 'm6', tournamentId: 'tr1', tournamentName: 'Apex Premier League 2026',
    teamA: teams[2], teamB: teams[0],
    date: '2026-09-18', time: '14:00', venue: 'Apex Cricket Ground',
    status: 'Completed',
    teamAScore: '168/7', teamAOvers: '20',
    teamBScore: '162/9', teamBOvers: '20',
    result: 'Apex Lions won by 6 runs', winnerName: 'Apex Lions',
  },
  {
    id: 'm7', tournamentId: 'tr2', tournamentName: 'Apex T20 Championship 2026',
    teamA: teams[4], teamB: teams[7],
    date: '2026-09-17', time: '10:00', venue: 'Apex Training Ground',
    status: 'Completed',
    teamAScore: '187/4', teamAOvers: '20',
    teamBScore: '154/8', teamBOvers: '20',
    result: 'Colombo Strikers won by 33 runs', winnerName: 'Colombo Strikers',
  },
  {
    id: 'm8', tournamentId: 'tr1', tournamentName: 'Apex Premier League 2026',
    teamA: teams[1], teamB: teams[3],
    date: '2026-09-15', time: '14:00', venue: 'Apex Cricket Ground',
    status: 'Completed',
    teamAScore: '145/6', teamAOvers: '20',
    teamBScore: '148/5', teamBOvers: '19.2',
    result: 'Apex Kings won by 5 wickets', winnerName: 'Apex Kings',
  },
];

// ============================================
// POINTS TABLE
// ============================================
export const pointsTable: PointsTableEntry[] = [
  { position: 1, team: teams[0], played: 5, won: 4, lost: 1, noResult: 0, points: 8, nrr: '+1.42' },
  { position: 2, team: teams[1], played: 5, won: 4, lost: 1, noResult: 0, points: 8, nrr: '+0.88' },
  { position: 3, team: teams[2], played: 5, won: 3, lost: 2, noResult: 0, points: 6, nrr: '+0.41' },
  { position: 4, team: teams[3], played: 5, won: 3, lost: 2, noResult: 0, points: 6, nrr: '+0.17' },
  { position: 5, team: teams[4], played: 5, won: 2, lost: 3, noResult: 0, points: 4, nrr: '-0.22' },
  { position: 6, team: teams[5], played: 5, won: 2, lost: 3, noResult: 0, points: 4, nrr: '-0.55' },
  { position: 7, team: teams[6], played: 5, won: 1, lost: 4, noResult: 0, points: 2, nrr: '-0.89' },
  { position: 8, team: teams[7], played: 5, won: 1, lost: 4, noResult: 0, points: 2, nrr: '-1.22' },
];

// ============================================
// NEWS
// ============================================
export const newsArticles: NewsArticle[] = [
  {
    id: 'n1', title: 'Apex Warriors Clinch Thriller Against Titans in APL 2026',
    slug: 'warriors-clinch-thriller-titans-apl-2026',
    category: 'Match Report',
    featuredImage: 'https://images.unsplash.com/photo-1540747913346-19212a4b423e?w=800&auto=format&fit=crop',
    excerpt: 'In an electrifying finish, Apex Warriors edged past Apex Titans by 6 runs in what many are calling the match of the season.',
    content: 'Full match report content here...',
    author: 'ACA Media Team', publishedAt: '2026-09-20', status: 'Published',
    tags: ['APL2026', 'Warriors', 'Titans', 'T20'],
  },
  {
    id: 'n2', title: 'ACA Academy Open Day — Register Your Child Now',
    slug: 'aca-academy-open-day-2026',
    category: 'Academy',
    featuredImage: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&auto=format&fit=crop',
    excerpt: 'Apex Cricket Academy announces open registration for the 2026/27 coaching season. Programs available for U10 through U18.',
    content: 'Full academy open day article...',
    author: 'Academy Director', publishedAt: '2026-09-18', status: 'Published',
    tags: ['Academy', 'Registration', 'Youth'],
  },
  {
    id: 'n3', title: 'Apex Premier League 2026 — Season Preview',
    slug: 'apl-2026-season-preview',
    category: 'Tournament',
    featuredImage: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&auto=format&fit=crop',
    excerpt: 'With 12 teams competing across 66 matches, APL 2026 promises to be the most competitive season yet. Here\'s what to expect.',
    content: 'Full season preview...',
    author: 'ACA Media Team', publishedAt: '2026-09-15', status: 'Published',
    tags: ['APL2026', 'Preview', 'Tournament'],
  },
  {
    id: 'n4', title: 'New Floodlights Installed at Apex Cricket Ground',
    slug: 'new-floodlights-apex-cricket-ground',
    category: 'News',
    featuredImage: 'https://images.unsplash.com/photo-1473976345543-9fce928c1d6e?w=800&auto=format&fit=crop',
    excerpt: 'Apex Cricket Association has completed the installation of state-of-the-art LED floodlights at the main Apex Cricket Ground.',
    content: 'Full facilities article...',
    author: 'ACA Admin', publishedAt: '2026-09-10', status: 'Published',
    tags: ['Facilities', 'Ground', 'Infrastructure'],
  },
  {
    id: 'n5', title: 'Corporate Sixes 2026 — Registration Now Open',
    slug: 'corporate-sixes-2026-registration',
    category: 'Announcement',
    featuredImage: 'https://images.unsplash.com/photo-1569701813229-33284b643e3c?w=800&auto=format&fit=crop',
    excerpt: 'Register your corporate team for the Apex Corporate Sixes 2026 tournament. Limited slots available — don\'t miss out!',
    content: 'Corporate Sixes details...',
    author: 'Tournament Director', publishedAt: '2026-09-05', status: 'Published',
    tags: ['Corporate', 'Sixes', 'Registration'],
  },
  {
    id: 'n6', title: 'Community Cricket Day — Bringing Families Together',
    slug: 'community-cricket-day-2026',
    category: 'Community',
    featuredImage: 'https://images.unsplash.com/photo-1595872994752-1eb0f21f9bb6?w=800&auto=format&fit=crop',
    excerpt: 'ACA\'s annual Community Cricket Day was a huge success, with over 500 families participating in fun cricket activities.',
    content: 'Community day recap...',
    author: 'Community Manager', publishedAt: '2026-08-28', status: 'Published',
    tags: ['Community', 'Family', 'Event'],
  },
];

// ============================================
// FACILITIES
// ============================================
export const facilities: Facility[] = [
  {
    id: 'f1', name: 'Apex Cricket Ground',
    description: 'Our premier international-standard cricket ground featuring a turf wicket, floodlights, digital scoreboard, and a 2,000-seat pavilion.',
    images: ['https://images.unsplash.com/photo-1540747913346-19212a4b423e?w=800', 'https://images.unsplash.com/photo-1473976345543-9fce928c1d6e?w=800'],
    openingHours: 'Mon–Fri: 8AM–10PM | Sat–Sun: 6AM–10PM',
    capacity: 2000,
    features: ['Turf Wicket', 'LED Floodlights', 'Digital Scoreboard', 'Pavilion', '2000-seat Stands', 'Dressing Rooms', 'Commentary Box'],
    status: 'Available', bookingAvailable: true,
  },
  {
    id: 'f2', name: 'Indoor Cricket Nets',
    description: 'State-of-the-art indoor cricket facility with 6 bowling lanes, artificial turf, bowling machines and video analysis systems.',
    images: ['https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800'],
    openingHours: 'Mon–Fri: 5AM–9PM | Sat–Sun: 5AM–9PM',
    capacity: 30,
    features: ['6 Bowling Lanes', 'Artificial Turf', 'Bowling Machines', 'Video Analysis', 'Air Conditioning'],
    status: 'Available', bookingAvailable: true,
  },
  {
    id: 'f3', name: 'Outdoor Training Nets',
    description: 'Four outdoor practice nets with quality matting and open access for players. Available for individual and team practice sessions.',
    images: ['https://images.unsplash.com/photo-1569701813229-33284b643e3c?w=800'],
    openingHours: 'Daily: 6AM–7PM',
    capacity: 20,
    features: ['4 Practice Nets', 'Quality Matting', 'Open Air', 'Lighting Available'],
    status: 'Available', bookingAvailable: true,
  },
  {
    id: 'f4', name: 'Fitness Centre',
    description: 'Modern gymnasium with cricket-specific training equipment, strength and conditioning machines, and a qualified trainer on site.',
    images: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800'],
    openingHours: 'Mon–Sat: 5AM–10PM | Sun: 7AM–7PM',
    capacity: 40,
    features: ['Strength Equipment', 'Cardio Machines', 'Cricket-Specific Training', 'Qualified Trainer', 'Changing Rooms'],
    status: 'Available', bookingAvailable: true,
  },
  {
    id: 'f5', name: 'Conference Room',
    description: 'Professional conference facility ideal for team meetings, coaching sessions, and association events. Equipped with AV systems.',
    images: ['https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800'],
    openingHours: 'Mon–Fri: 8AM–8PM | Sat: 8AM–6PM',
    capacity: 50,
    features: ['Projector', 'Sound System', 'Wi-Fi', 'Air Conditioning', 'Whiteboard', 'Catering Available'],
    status: 'Available', bookingAvailable: true,
  },
  {
    id: 'f6', name: 'Players Lounge & Restaurant',
    description: 'Comfortable lounge with restaurant facilities serving Sri Lankan and international cuisine. A perfect space for team bonding.',
    images: ['https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800'],
    openingHours: 'Daily: 7AM–10PM',
    capacity: 80,
    features: ['Full Restaurant', 'Lounge Area', 'TV Screens', 'Wi-Fi', 'Catering for Events'],
    status: 'Available', bookingAvailable: false,
  },
];

// ============================================
// COMMITTEE
// ============================================
export const committee: CommitteeMember[] = [
  { id: 'c1', name: 'Mr. Suresh Abeywickrama', position: 'President', photo: 'https://ui-avatars.com/api/?name=SA&background=0B3D2E&color=F5B301&size=128', bio: 'Former national-level cricketer with over 30 years of cricket administration experience.' },
  { id: 'c2', name: 'Mrs. Priya Jayawardena', position: 'Vice President', photo: 'https://ui-avatars.com/api/?name=PJ&background=16A34A&color=FFF&size=128', bio: 'Passionate cricket advocate and former Women\'s cricket captain.' },
  { id: 'c3', name: 'Mr. Rohan Dissanayake', position: 'Secretary', photo: 'https://ui-avatars.com/api/?name=RD&background=0B3D2E&color=F5B301&size=128', bio: 'MBA qualified administrator who has served ACA for 12 years.' },
  { id: 'c4', name: 'Mr. Lalith Karunaratne', position: 'Treasurer', photo: 'https://ui-avatars.com/api/?name=LK&background=16A34A&color=FFF&size=128', bio: 'Chartered Accountant and cricket enthusiast managing association finances.' },
  { id: 'c5', name: 'Mr. Nuwan Ratnayake', position: 'Tournament Director', photo: 'https://ui-avatars.com/api/?name=NR&background=0B3D2E&color=F5B301&size=128', bio: 'Organized over 50 major cricket tournaments in the past decade.' },
  { id: 'c6', name: 'Mr. Chaminda Weerasinghe', position: 'Academy Director', photo: 'https://ui-avatars.com/api/?name=CW&background=16A34A&color=FFF&size=128', bio: 'Level 3 certified cricket coach with 15 years of coaching experience.' },
  { id: 'c7', name: 'Ms. Thilini Perera', position: 'Assistant Secretary', photo: 'https://ui-avatars.com/api/?name=TP&background=0B3D2E&color=F5B301&size=128', bio: 'Cricket enthusiast and communications professional.' },
  { id: 'c8', name: 'Mr. Asanka Fernando', position: 'Committee Member', photo: 'https://ui-avatars.com/api/?name=AF&background=16A34A&color=FFF&size=128', bio: 'Grassroots cricket development advocate and former club captain.' },
];

// ============================================
// COACHES
// ============================================
export const coaches: Coach[] = [
  { id: 'co1', name: 'Chaminda Weerasinghe', photo: 'https://ui-avatars.com/api/?name=CW&background=0B3D2E&color=F5B301&size=128', qualification: 'ICC Level 3 Coach', experience: '15 Years', specialization: 'Batting & Strategy', bio: 'Former national-level cricketer turned coach, specializing in batting technique development.' },
  { id: 'co2', name: 'Dilshan Gunawardena', photo: 'https://ui-avatars.com/api/?name=DG&background=16A34A&color=FFF&size=128', qualification: 'ICC Level 2 Coach', experience: '10 Years', specialization: 'Fast Bowling', bio: 'Elite fast bowling coach who has developed numerous talents for provincial cricket.' },
  { id: 'co3', name: 'Pradeep Jayantha', photo: 'https://ui-avatars.com/api/?name=PJ&background=0B3D2E&color=F5B301&size=128', qualification: 'ICC Level 2 Coach', experience: '8 Years', specialization: 'Spin Bowling', bio: 'Specialist spin bowling coach with expertise in both off-spin and leg-spin techniques.' },
  { id: 'co4', name: 'Nilmini Samarawickrama', photo: 'https://ui-avatars.com/api/?name=NS&background=16A34A&color=FFF&size=128', qualification: 'ICC Level 1 Coach', experience: '6 Years', specialization: 'Youth Development & Fielding', bio: 'Dedicated youth development coach focused on building fundamentals and fielding excellence.' },
];

// ============================================
// SPONSORS
// ============================================
export const sponsors: Sponsor[] = [
  { id: 's1', name: 'Ceylon Bank', logo: 'https://ui-avatars.com/api/?name=CB&background=1D4ED8&color=FFF&size=128&bold=true', website: 'https://example.com', level: 'Title Sponsor', active: true },
  { id: 's2', name: 'Lanka Telecom', logo: 'https://ui-avatars.com/api/?name=LT&background=DC2626&color=FFF&size=128&bold=true', website: 'https://example.com', level: 'Platinum', active: true },
  { id: 's3', name: 'SL Insurance', logo: 'https://ui-avatars.com/api/?name=SI&background=16A34A&color=FFF&size=128&bold=true', website: 'https://example.com', level: 'Platinum', active: true },
  { id: 's4', name: 'Apex Motors', logo: 'https://ui-avatars.com/api/?name=AM&background=0B3D2E&color=F5B301&size=128&bold=true', website: 'https://example.com', level: 'Gold', active: true },
  { id: 's5', name: 'Premier Sports', logo: 'https://ui-avatars.com/api/?name=PS&background=7C3AED&color=FFF&size=128&bold=true', website: 'https://example.com', level: 'Gold', active: true },
  { id: 's6', name: 'Island Beverages', logo: 'https://ui-avatars.com/api/?name=IB&background=F59E0B&color=FFF&size=128&bold=true', website: 'https://example.com', level: 'Silver', active: true },
  { id: 's7', name: 'Sports Gear Lanka', logo: 'https://ui-avatars.com/api/?name=SG&background=0369A1&color=FFF&size=128&bold=true', website: 'https://example.com', level: 'Partner', active: true },
  { id: 's8', name: 'Media Network', logo: 'https://ui-avatars.com/api/?name=MN&background=0F766E&color=FFF&size=128&bold=true', website: 'https://example.com', level: 'Partner', active: true },
];

// ============================================
// STATS
// ============================================
export const associationStats: AssociationStats = {
  totalTeams: 28,
  totalPlayers: 520,
  annualTournaments: 8,
  matchesPerYear: 180,
  totalMembers: 1245,
  yearsEstablished: 12,
};

// ============================================
// GALLERY
// ============================================
export const galleryImages: GalleryImage[] = [
  { id: 'g1', url: 'https://images.unsplash.com/photo-1540747913346-19212a4b423e?w=600&auto=format&fit=crop', title: 'APL 2026 Final Match', category: 'Matches', uploadedAt: '2026-09-20', alt: 'Cricket match action' },
  { id: 'g2', url: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=600&auto=format&fit=crop', title: 'Academy Training Session', category: 'Academy', uploadedAt: '2026-09-18', alt: 'Academy coaching' },
  { id: 'g3', url: 'https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=600&auto=format&fit=crop', title: 'Tournament Opening Ceremony', category: 'Tournaments', uploadedAt: '2026-08-01', alt: 'Tournament ceremony' },
  { id: 'g4', url: 'https://images.unsplash.com/photo-1569701813229-33284b643e3c?w=600&auto=format&fit=crop', title: 'Community Cricket Day', category: 'Community', uploadedAt: '2026-08-28', alt: 'Community cricket' },
  { id: 'g5', url: 'https://images.unsplash.com/photo-1595872994752-1eb0f21f9bb6?w=600&auto=format&fit=crop', title: 'Awards Night 2025', category: 'Awards', uploadedAt: '2025-12-15', alt: 'Cricket awards night' },
  { id: 'g6', url: 'https://images.unsplash.com/photo-1473976345543-9fce928c1d6e?w=600&auto=format&fit=crop', title: 'Apex Cricket Ground — Night', category: 'Facilities', uploadedAt: '2026-09-10', alt: 'Cricket ground at night' },
  { id: 'g7', url: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&auto=format&fit=crop', title: 'ACA AGM 2026', category: 'Events', uploadedAt: '2026-04-12', alt: 'AGM event' },
  { id: 'g8', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&auto=format&fit=crop', title: 'Fitness Training', category: 'Academy', uploadedAt: '2026-07-20', alt: 'Fitness training' },
  { id: 'g9', url: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&auto=format&fit=crop', title: 'Team Dinner 2026', category: 'Events', uploadedAt: '2026-09-01', alt: 'Team dinner' },
];
