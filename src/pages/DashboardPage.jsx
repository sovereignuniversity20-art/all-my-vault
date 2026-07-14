 import { useState } from "react";
 import VaultHeader from "../components/VaultHeader";
 import MediaCard from "../components/MediaCard";
 import MediaFormModal from "../components/MediaFormModal";
 import Footer from "../components/Footer";
 
 const DashboardPage = ({items,currentUser, onAdd, onDelete, onEdit, onLogout, onOpenAbout}) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [activeFilter, setActiveFilter] = useState('');
    const [searchQuery, setSearchQuery] = useState('');
    
const onOpenForm = () => {
        setIsFormOpen(true);
    };

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

const mediaTypes = ['image', 'audio', 'video', 'pdf']

let visibleItems = items;
if (activeFilter !== '' && activeFilter !== 'all') {
    visibleItems = visibleItems.filter((item) => item.type === activeFilter);  
}

if (searchQuery !== '') {
    visibleItems = visibleItems.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );
}

    return (
    <main className="dashboard">
        <VaultHeader currentUser={currentUser} onOpenForm={onOpenForm} 
        searchQuery={searchQuery} activeFilter={activeFilter} 
        onFilterChange={setActiveFilter} onSearchChange={setSearchQuery} onLogout={onLogout} />
         <table>
        <thead>
            <tr>
                <th>Type</th>
                <th>Count</th>
            </tr>
        </thead>        
        <tbody>
            {mediaTypes.map((type) => (
                <tr key={type}>
                    <td>{type}</td>
                    <td> {items.filter((item) => item.type === type).length}</td>
                </tr>
            ))}
        </tbody>
       </table>
        {visibleItems.map((item) => (
       <MediaCard 
       key={item.id} 
       {...item} 
       onDelete={onDelete} 
       onEdit={handleOpenEdit}/> 
       ))}
        <MediaFormModal isOpen={isFormOpen} editingItem={editingItem} 
        onSubmit={handleFormSubmit} onClose={() => setIsFormOpen(false)} />
        <Footer onOpenAbout={onOpenAbout} />
      
    </main>
       
    )
    
 };


export default DashboardPage;

