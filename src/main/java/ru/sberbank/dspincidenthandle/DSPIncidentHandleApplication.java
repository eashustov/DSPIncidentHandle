package ru.sberbank.dspincidenthandle;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class DSPIncidentHandleApplication {

    private static ConfigurableApplicationContext context;



   //gcInterval
    public static int gcInterval;

    @Value("${gcInterval}")
    private void setGCInterval(int gc_Interval) {
        gcInterval = gc_Interval;
    }

    public static void main(String[] args) {
        context = SpringApplication.run(DSPIncidentHandleApplication.class, args);


        HeapControl ();

    }

    public static void HeapControl () {
//        System.out.println("Heap контроль запущен");
        while (true) {

            // Sleep to emulate background work
            try {
                Thread.sleep(gcInterval*60000);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }

            System.gc();
//            System.out.println("Запущен GC");

            // Get current size of heap in bytes
            long heapSize = Runtime.getRuntime().totalMemory();

            // Get maximum size of heap in bytes. The heap cannot grow beyond this size.// Any attempt will result in an OutOfMemoryException.
            long heapMaxSize = Runtime.getRuntime().maxMemory();

            float usedHeapPrc = (float) heapSize / heapMaxSize;

//            System.out.println("totalMemory() :" + heapSize + " maxMemory(): " + heapMaxSize + " usedHeapPrc: " + usedHeapPrc);

            if (usedHeapPrc > 0.80) {
                //Если использование heap больше 80 процентов, выполнить рестарт приложения

                restart();
            }

        }
    }

    public static void restart() {
        ApplicationArguments args = context.getBean(ApplicationArguments.class);

        Thread thread = new Thread(() -> {
            context.close();
            context = SpringApplication.run(DSPIncidentHandleApplication.class, args.getSourceArgs());
        });

        thread.setDaemon(false);
        thread.start();
    }


}
