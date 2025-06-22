// Financial Forecasting
public class Forecast{
    public static double forecast(double initialAmount, double rate, int years) {
        if (years == 0) {
            return initialAmount;
        } else {
            return forecast(initialAmount, rate, years - 1) * (1 + rate);
        }
    }

    public static void main(String[] args) {
        double initialAmount = 10000; // ₹10,000
        double growthRate = 0.08;     // 8% annual growth
        int years = 5;

        double futureValue = forecast(initialAmount, growthRate, years);
        System.out.printf("Predicted value after %d years: ₹%.2f\n", years, futureValue);
    }
}
