import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Work from './pages/Work'
import AdminLogin from './admin/pages/AdminLogin'
import Dashboard from './admin/pages/Dashboard'
import Contacts from './admin/pages/Contacts'
import { Projects, Services, Clients, Subscribers } from './admin/pages/AdminPages'
import ProtectedRoute from './admin/components/ProtectedRoute'
import { ThemeProvider } from './admin/components/ThemeContext'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />

        {/* Admin — all wrapped in ThemeProvider */}
        <Route path="/admin/*" element={
          <ThemeProvider>
            <Routes>
              <Route path="login" element={<AdminLogin />} />
              <Route path="" element={<Navigate to="dashboard" replace />} />
              <Route path="dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
              <Route path="contacts" element={<ProtectedRoute><Contacts /></ProtectedRoute>} />
              <Route path="projects" element={<ProtectedRoute><Projects /></ProtectedRoute>} />
              <Route path="services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
              <Route path="clients" element={<ProtectedRoute><Clients /></ProtectedRoute>} />
              <Route path="subscribers" element={<ProtectedRoute><Subscribers /></ProtectedRoute>} />
            </Routes>
          </ThemeProvider>
        } />
      </Routes>
    </BrowserRouter>
  )
}
