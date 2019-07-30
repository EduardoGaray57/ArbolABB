public class AppArbolABB{
	public static void main(String[] args) {
		ArbolABB arbol = new ArbolABB();
		arbol.insertar(5);
		arbol.insertar(3);
		arbol.insertar(5);
		arbol.insertar(1);
		arbol.insertar(4);
		/*System.out.println(arbol.raiz.dato);
		System.out.println(arbol.raiz.h_izq.dato);
		System.out.println(arbol.raiz.h_der.dato);
		System.out.println(arbol.raiz.h_izq.h_izq.dato);
		System.out.println(arbol.raiz.h_izq.h_der.dato);*/
		arbol.preOrden();
		arbol.Inorden();
		arbol.postOrden();
		if(arbol.buscar(5)){
			System.out.println("encontrado");
		}
		System.out.println("Se elimino algo");
		arbol.eliminar(4);
		arbol.preOrden();
		arbol.Inorden();
		arbol.postOrden();
	}
}