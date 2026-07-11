 import { useState } from "react";
 import VaultHeader from "../components/VaultHeader";
 import MediaCard from "../components/MediaCard";
 import MediaFormModal from "../components/MediaFormModal";
 
 const DashboardPage = ({items,currentUser, onAdd, onDelete, onEdit}) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [activeFilter, setActiveFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const onOpenForm = () => {
        setIsFormOpen(true);
    }

const handleFormSubmit = (itemData) => {
    if (editingItem) {
        onEdit(itemData);
    } else {
        onAdd(itemData);
    }
    setEditingItem(null);
};

const handleOpenEdit = (item) => {
    setEditingItem(item);
    setIsFormOpen(true);
};

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
       onEdit={handleOpenEdit}/> 
       ))}
        <MediaFormModal isOpen={isFormOpen} editingItem={editingItem} 
        onSubmit={handleFormSubmit} onClose={() => setIsFormOpen(false)} />
    </main>
       
    )
    
 };


export default DashboardPage;