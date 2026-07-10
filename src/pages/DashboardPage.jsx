 import { useState } from "react";
 import VaultHeader from "../components/Header";

 const DashboardPage = ({items,currentUser, onAdd, onDelete, onEdit}) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [activeFilter, setActiveFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const onOpenForm = () => {
        setIsFormOpen(true);
    }

    return (
    <main className="dashboard">
        <VaultHeader currentUser={currentUser} onOpenForm={onOpenForm} 
        searchQuery={searchQuery} activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} onSearchChange={setSearchQuery} />
    </main>
    )
    
 };


export default DashboardPage;