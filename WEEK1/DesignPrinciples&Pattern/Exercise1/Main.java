// Singleton Pattern Example in Java
public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("First instance message from logger1");
        Logger logger2 = Logger.getInstance();
        logger2.log("Second instance message from logger2");
        if (logger1 == logger2) {
            System.out.println("Both loggers are the same instance.");
        } else {
            System.out.println("Different logger instances.");
        }
    }
}
