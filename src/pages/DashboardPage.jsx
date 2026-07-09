 import { useState } from "react";
 
 const dashBoard = (props) => {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [activeFilter, setActiveFilter] = useState(null);
    const [searchQuery, setSearchQuery] = useState(null);

    onOpenForm = () => setIsFormOpen(true);

 }


export default dashBoard;