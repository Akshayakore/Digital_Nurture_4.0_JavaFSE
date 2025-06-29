import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.*;

public class AAAPatternTest {

    private int value;

    @Before
    public void setUp() {
        // Setup (Arrange)
        value = 10;
    }

    @Test
    public void testAddition() {
        // Act
        int result = value + 5;

        // Assert
        assertEquals(15, result);
    }

    @Test
    public void testSubtraction() {
        // Act
        int result = value - 3;

        // Assert
        assertEquals(7, result);
    }

    @After
    public void tearDown() {
        // Teardown
        value = 0;
    }
}
