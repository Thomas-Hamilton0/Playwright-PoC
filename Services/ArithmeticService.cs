using WebVI.Calculator.Models;

namespace WebVI.Calculator.Services
{
    public class ArithmeticService : IArithmeticService
    {
        public decimal Add(decimal a, decimal b)
        {
            return a + b;
        }

        public decimal Subtract(decimal a, decimal b)
        {
            return a - b;
        }

        public decimal Multiply(decimal a, decimal b)
        {
            return a * b;
        }

        public decimal Divide(decimal a, decimal b)
        {
            if (b == 0)
            {
                throw new DivideByZeroException("Cannot divide by zero.");
            }
            return a / b;
        }

        public decimal Calculate(decimal a, decimal b, Operation op)
        {
            switch (op)
            {
                case Operation.Add:
                    return Add(a, b);
                case Operation.Subtract:
                    return Subtract(a, b);
                case Operation.Multiply:
                    return Multiply(a, b);
                case Operation.Divide:
                    return Divide(a, b);
                default:
                    throw new NotSupportedException("Unsupported operation.");
            }
        }
    }
}