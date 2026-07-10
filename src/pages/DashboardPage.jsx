 import { useState } from "react";
 import VaultHeader from "../components/VaultHeader";
 import MediaCard from "../components/MediaCard";
 
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
        {items.map((item) => (
       <MediaCard 
       key={item.id} 
       {...item} 
       onDelete={onDelete} 
       onEdit={onEdit}/> 
       ))}
        
    </main>
       
    )
    
 };


export default DashboardPage;