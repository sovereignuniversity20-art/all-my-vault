import { useState } from "react";

const VaultHeader = ({currentUser, onOpenForm, searchQuery, activeFilter, onFilterChange, onSearchChange}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    return (
    <header>
        <h1>All My Vault</h1>
        <div className="searchbar">
             <label>
                Search    
                <input type="search" value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)} />
            </label>
        </div>
        
        <div className="dropdown">
            <button type="button" 
            onClick={(e) => setIsDropdownOpen (!isDropdownOpen)}>Filter</button>
            {isDropdownOpen && (
                <div>
                    <button onClick={() => {onFilterChange('all');
                    setIsDropdownOpen(false); }}>All</button>
                    <button onClick={() => {onFilterChange('pdf');
                    setIsDropdownOpen(false); }}>PDFs</button>
                    <button onClick={() => {onFilterChange('image');
                    setIsDropdownOpen(false); }}>Images</button>
                    <button onClick={() => {onFilterChange('audio');
                    setIsDropdownOpen(false); }}>Audio Files</button>
                    <button onClick={() => {onFilterChange('video');
                    setIsDropdownOpen(false); }}>Video Files</button>
                </div>
            )}   
        </div>
       
       <div className="addToVault">
        <label>
        Add to Vault    
        <button type="button" 
        onClick={(e) => onOpenForm()} />  
        </label>
        </div>
        
        <h2>{(currentUser.name)}</h2>
    </header> 
    )
};

export default VaultHeader;

