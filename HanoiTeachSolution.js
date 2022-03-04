//Crear nuestra pila
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.length = 0;
  }

  push(value){
    let newNode = new Node(value);
    
    if(this.isEmpty()){
      this.top = newNode;
    }else{
      const currentTop = this.top;
      newNode.next = currentTop;
      this.top = newNode;
    }
    this.length++;
    return this;
  }

  pop(){
    if(!this.isEmpty()){
      let currentNode = this.top;
      let nextNode = this.top.next;
      this.top = nextNode;
      this.length--;
      return currentNode;
    }
    return null;
  }

  traverse(){
    //Recorrer
    let list = [];
    let currentNode = this.top;

    while(currentNode){
      list.push(currentNode.value);
      //Al siguiente elemento en la pila
      currentNode = currentNode.next;
    }
    return list;
  }

  isEmpty(){
    return this.length === 0 ? true : false;
  }

  peek(){
    return this.top ? this.top.value : null;
  }
}


class Tower{
  constructor(){
    this.disks = new Stack();
  }

  add(disk){
    if(!this.disks.isEmpty() && this.disks.peek() <= disk){
      console.log("No se puede agregar el disco en la torre");
    }else{
      this.disks.push(disk);
    }
  }

  moveTopTo(tower){
    // 1. Borrar el disco de la torre
    let disk = this.disks.pop();
    // 2. Agregarlo a la otra torre
    tower.add(disk.value);
  }

  //Primer argumento -> numero de discos a mover
  //Segundo argumento -> Hacía donde vamos a mover los discos
  //Tercer argumento -> Torre Auxiliar para mover los discos
  moveDisks(nDisks, towerDest, towerAux){
    //Caso base
    if(nDisks === 0){
      return;
    }

    //Mover los discos de la torre de origen a la torre aux
    //La torre destino va a ser nuestra torre aux
    this.moveDisks(nDisks - 1, towerAux, towerDest);
    this.moveTopTo(towerDest);
    //Mover los discos de la torre aux a la torre de destino
    //La torre de origen va a funcionar como torre aux
    towerAux.moveDisks(nDisks - 1, towerDest, this);
  }
}


let towerOrigin = new Tower();
let towerAux = new Tower();
let towerDest = new Tower();

towerOrigin.add(4);
towerOrigin.add(3);
towerOrigin.add(2);
towerOrigin.add(1);

towerOrigin.moveDisks(4, towerDest, towerAux);
console.log(towerOrigin.disks.traverse());
console.log(towerAux.disks.traverse());
console.log(towerDest.disks.traverse());