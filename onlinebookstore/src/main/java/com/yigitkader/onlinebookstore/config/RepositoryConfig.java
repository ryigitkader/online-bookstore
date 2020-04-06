package com.yigitkader.onlinebookstore.config;

import com.yigitkader.onlinebookstore.entity.Book;
import com.yigitkader.onlinebookstore.entity.BookCategory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;

import javax.persistence.EntityManager;
import javax.persistence.metamodel.Type;

@Configuration
public class RepositoryConfig implements RepositoryRestConfigurer {

    @Autowired
    private EntityManager entityManager;

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {

        /*
        config.exposeIdsFor(Book.class);
        config.exposeIdsFor(BookCategory.class);
        */

        //Bring entity's ids on json automaticly
        config.exposeIdsFor(entityManager
                .getMetamodel()
                .getEntities()
                .stream()
                .map(Type::getJavaType).toArray(Class[]::new));

        //Automaticly giving permission for the requests
        config.getCorsRegistry()
                .addMapping("/**")
                .allowedOrigins("http://localhost:8081");

    }
}
