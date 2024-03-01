import {useRef} from 'react';

const useCustomEffect =(effect,deps) =>{
    const isFirstRender =useRef(true)
    const prevDeps=useRef([]);
  //First Render
    if(isFirstRender.current){
        isFirstRender.current=false;
        effect()
        return
    }

    //Deps Changes and My Deps Array

    const depsChanged =deps?JSON.stringify(deps)!== JSON.stringify(prevDeps.current):true;
      

    if(depsChanged){
        effect();
    }

  prevDeps.current=deps || [];
};


export default useCustomEffect;

