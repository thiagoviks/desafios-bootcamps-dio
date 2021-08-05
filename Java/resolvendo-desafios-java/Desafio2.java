import java.io.IOException;
import java.util.Scanner;

public class Desafio2 {
	
   public static void main(String[] args) throws IOException {
        Scanner leitor = new Scanner(System.in);
        int N = leitor.nextInt();
        int casaComprado = 0;
        int casaSobrando = 0;
        int trabComprado = 0;
        int trabSobrando = 0;
        for (int i = 0; i < N; i++) {
        	String irProTrabalho = leitor.next();
        	String irPraCasa = leitor.next();
        	if (irProTrabalho.equalsIgnoreCase("chuva") && casaSobrando == 0) {
        		casaComprado++;
        		trabSobrando++;
        	} else if (irProTrabalho.equalsIgnoreCase("chuva") && casaSobrando > 0) {
        		trabSobrando++;
        		casaSobrando--;
        	}
        	if (irPraCasa.equalsIgnoreCase("chuva") && trabSobrando == 0) {
        		trabComprado++;
        		casaSobrando++;
        	} else if (irPraCasa.equalsIgnoreCase("chuva") && trabSobrando > 0) {
        		casaSobrando++;
        		trabSobrando--;
        	}
        }
        System.out.println(casaComprado + " " + trabComprado);
    }
}