public class Nodo{
	int dato;
	Nodo h_izq;
	Nodo h_der;
	Nodo(){
		h_izq=null;
		h_der=null;
	}
	Nodo(int dato){
		this.dato=dato;
		h_izq=null;
		h_der=null;
	}
}