import { useState, useEffect } from 'react';

const MediaFormModal = ({isOpen, editingItem, onSubmit, onClose}) => {
    const [formValues, setFormValues] = useState({title: '', type: '', tags: [], dateAdded: ''});

    useEffect(() => {
         if (editingItem) { 
            setFormValues(editingItem) 
        } else { 
            setFormValues({title: '', type: '', tags: [], dateAdded: ''}) 
        }  
    }, [editingItem]);
    
    if(!isOpen) return null;

return (

<div className="mediacard">
    <label>
    Title:
    <input type="text" value={formValues.title} 
    onChange={(e) => setFormValues({...formValues, title:e.target.value})} />
    </label>

    <label>
    Tags:    
    <input type="text" value={formValues.tags}
    onChange={(e) => setFormValues({...formValues, tags:e.target.value})} />
    </label> 
    
    <label>
       <input type="file" onChange={handleFileChange}/> 
    </label>

    <button type="submit" onClick={handleSubmit}>Save
    </button>
    
    <button type="button" onClick={onClose}>Cancel 
    </button>
</div>
)
};

export default MediaFormModal; 
