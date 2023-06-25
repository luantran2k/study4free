import { lazy } from "react"

// MAIN ROUTE
const DetailExam = lazy(() => import('../pages/Exams/DetailExam/DetailExam'));
const Writing = lazy(() => import('../pages/Exams/Writing'));
const GrammarPage = lazy(() => import('../pages/Grammar'));
const SectionPage = lazy(() => import('../pages/Grammar/SectionPage'));
const HomePage = lazy(() => import('../pages/Home'));
const Payment = lazy(() => import('../pages/Payment/Payment'));
const UserProfilePage = lazy(() => import('../pages/UserProfile'));
const Collection = lazy(() => import('../pages/UserProfile/Collection'));
const Reminder = lazy(() => import('../pages/UserProfile/Reminder'));
const UserInformation = lazy(() => import('../pages/UserProfile/UserInformation'));
const VocabulariesPage = lazy(() => import('../pages/Vocabularies'));
const VocabularyDetail = lazy(() => import('../pages/Vocabularies/VocabularyDetail'));
const DeleteAccount = lazy(() => import('../pages/UserProfile/DeleteAccount'));
const AnalyzeResults = lazy(() => import('../pages/UserProfile/AnalyzeResults'))
const ExamsPage = lazy(() => import('../pages/Exams'));
const RootLayout = lazy(() => import('../pages/layouts/Root'))
const Authentication = lazy(() => import('../pages/Authentication/Authentication'));

// ADMIN ROUTE
const AdminLayout = lazy(() => import('../pages/layouts/Admin'));
const ExamsAdminPage = lazy(() => import('../pages/Admin/Exams'));
const EditExam = lazy(() => import('../pages/Admin/Exams/EditExam'));

export { AnalyzeResults, Collection, DetailExam, ExamsPage, GrammarPage, HomePage, Payment, Reminder, SectionPage, UserInformation, UserProfilePage, VocabulariesPage, VocabularyDetail, Writing, DeleteAccount, RootLayout, Authentication, AdminLayout, ExamsAdminPage, EditExam } 