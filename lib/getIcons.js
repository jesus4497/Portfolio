const getIcons = (option = 'others') => {

    if(option === 'frontend'){
        const r = require.context('../public/icons/frontend', false, /\.svg$/);

        const icons = r.keys().map( item => {
            const iconName = item.replace("./","").split('.')[0];
            
            const icon = {
                description: iconName,
                src: `/icons/frontend/${iconName}.svg`
            }
            return icon
        
        })

        return icons

    }else if(option === 'backend'){
        const r = require.context('../public/icons/backend', false, /\.svg$/);

        const icons = r.keys().map( item => {
            const iconName = item.replace("./","").split('.')[0];
            
            const icon = {
                description: iconName,
                src: `/icons/backend/${iconName}.svg`
            }
            return icon
        
        })

        return icons
    }else{
        const r = require.context('../public/icons/others', false, /\.svg$/);

        const icons = r.keys().map( item => {
            const iconName = item.replace("./","").split('.')[0];
            
            const icon = {
                description: iconName,
                src: `/icons/others/${iconName}.svg`
            }
            return icon
        
        })

        return icons
    }

    

}

export default getIcons