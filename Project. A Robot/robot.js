
//vilage of Meadowfield. Массив дорог.
const roads = [
    "Alice's House-Bob's House",   "Alice's House-Cabin",
    "Alice's House-Post Office",   "Bob's House-Town Hall",
    "Daria's House-Ernie's House", "Daria's House-Town Hall",
    "Ernie's House-Grete's House", "Grete's House-Farm",
    "Grete's House-Shop",          "Marketplace-Farm",
    "Marketplace-Post Office",     "Marketplace-Shop",
    "Marketplace-Town Hall",       "Shop-Town Hall"
  ];


//Преобразуем список дорог в структуру данных, позволяющую узнать,
//куда можно попасть из каждого места

//Принимает массив ребер
function buildGraph(edges) {
    //Cоздаем переменную без "наследованных" свойст и методов
    let graph = Object.create(null);

    function addEdge(from, to) {
    //Если в графе нет ничего в пункте from, то добавим в пункт from пункт to
      if (graph[from] == null) {
        graph[from] = [to];
      } else {
        //Добавление в конец массива. Если там уже есть объекты
        graph[from].push(to);
      }
    }

    for (let [from, to] of edges.map(r => r.split("-"))) {
      addEdge(from, to);
      addEdge(to, from);
    }
    return graph;
  }
  
const roadGraph=buildGraph(roads);


  //Класс определяющий текущее местоположение робота
  //parcel - посылка . destination - пункт назначения
  class VillageState {
    constructor(place, parcels) {
      this.place = place;
      this.parcels = parcels;
    }
  
    move(destination) {
        // существует ли дорога из текущего места.
      if (!roadGraph[this.place].includes(destination)) {
        return this;// Если нет, возращаем текущее состояние
      } else {
        //Создаем новое состояние с пунктом назначения в качестве стартовой точки
        let parcels = this.parcels.map(p => {
            //если посылка не относится к текущему месту, то вернем ее
          if (p.place != this.place) return p;
          //иначе вернем Текущий адрес -> Текущее место
          //необходимый адрес -> в необходимый адресы
          return {place: destination, address: p.address};
        }).filter(p => p.place != p.address);
        //если посылка  находится по текущему адресу, то убираем ее
        return new VillageState(destination, parcels);
      }
    }
  }

  //выберем стартовую точку
  let first = new VillageState(
    "Post Office",
    [{place: "Post Office", address: "Alice's House"}]
  );
  let next = first.move("Alice's House");
  
  console.log(next.place);
  // → Alice's House
  console.log(next.parcels);
  // → []
  console.log(first.place);
  // → Post Office