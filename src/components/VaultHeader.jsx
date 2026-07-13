import { useState } from "react";

const VaultHeader = ({currentUser, onOpenForm, searchQuery, activeFilter, onFilterChange, onSearchChange, onLogout}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    return (
    <header>
        <h1>All My Vault &#127974;</h1>
        <div className="searchbar">
             <label>
                Search &#128269;   
                <input type="search" value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)} /> 
            </label>
        </div>
        
        <div className="dropdown">
            <button type="button" 
            onClick={(e) => setIsDropdownOpen (!isDropdownOpen)}>Filter &#128209;</button>
            {isDropdownOpen && (
                <div>
                    <button onClick={() => {onFilterChange('all');
                    setIsDropdownOpen(false); }}>All &#127974;</button>
                    <button onClick={() => {onFilterChange('pdf');
                    setIsDropdownOpen(false); }}>PDFs &#128195;</button>
                    <button onClick={() => {onFilterChange('image');
                    setIsDropdownOpen(false); }}>Images &#128248;</button>
                    <button onClick={() => {onFilterChange('audio');
                    setIsDropdownOpen(false); }}>Audio Files &#127911;</button>
                    <button onClick={() => {onFilterChange('video');
                    setIsDropdownOpen(false); }}>Video Files &#128249;</button>
                </div>
            )}   
        </div>

        <div>
            <button type="button"
            onClick={(e) => onLogout()}>Exit Vault &#x2386;</button>
        </div>
       
       <div className="addToVault">  
        <button type="button" 
        onClick={(e) => onOpenForm()}>Add to Vault  &#128229;</button>  
        </div>
        
        {currentUser && <h4>{(currentUser.name)}</h4>}
    </header> 
    )
};

export default VaultHeader;

