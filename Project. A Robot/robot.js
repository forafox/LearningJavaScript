
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
  
  console.log(roadGraph);